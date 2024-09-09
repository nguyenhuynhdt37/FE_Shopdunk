import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../redux/slice/UserSlice'

const Logout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(logOut())
    localStorage.removeItem('token')
    sessionStorage.removeItem('token')
    navigate('/login')
  }, [dispatch, navigate])

  return null
}

export default Logout
