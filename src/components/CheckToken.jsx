import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GetUserToToken } from '../redux/slice/UserSlice'
import { getdataOrder } from '../redux/slice/CartSlice'

const CheckToken = () => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  useEffect(() => {
    if (token) {
      dispatch(GetUserToToken(token))
        .unwrap()
        .then(() => {
          dispatch(getdataOrder(token))
        })
        .catch(() => {
          alert('Hết phiên đăng nhập, Vui lòng đăng nhập lại')
          localStorage.removeItem('token')
        })
    }
  }, [dispatch, token])

  return null
}

export default CheckToken
