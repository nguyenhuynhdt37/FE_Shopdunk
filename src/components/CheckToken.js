import useSelection from 'antd/es/table/hooks/useSelection'
import {
  useGetUserByTokenQuery,
  useRefreshTokenMutation,
} from '../redux/api/userApi'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setTokenAndRefestToken, setUserInfo } from '../redux/slice/UserSlice'

const CheckToken = () => {
  const tokens = useSelection(
    (state) => state.auth || { token: null, refreshToken: null }
  )
  const token = localStorage.getItem('token') || tokens?.token
  const retoken = localStorage.getItem('refreshToken') || tokens?.refreshToken
  const { refetch } = useGetUserByTokenQuery(null, { skip: !token })
  const [refreshToken] = useRefreshTokenMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    const handleUser = async () => {
      try {
        if (token && retoken) {
          const user = await refetch().unwrap()
          dispatch(setUserInfo({ user }))
        }
      } catch (error) {
        console.error(error)
        if (error?.status === 401 && retoken) {
          try {
            const { data } = await refreshToken().unwrap()
            console.log('refresh token success')
            dispatch(setTokenAndRefestToken(data))
            const user = await refetch().unwrap()
            dispatch(setUserInfo({ user }))
          } catch (e) {
            if (e?.status === 401) {
              alert('Hết phiên đăng nhập, vui lòng đăng nhập lại')
              localStorage.removeItem('token')
              localStorage.removeItem('refreshToken')
            } else {
              console.error('Unexpected error', e)
            }
          }
        }
      }
    }
    handleUser()
  }, [])

  return null
}

export default CheckToken
