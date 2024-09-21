import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const { token, refreshToken, user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (token && refreshToken && user) {
      return navigate('/')
    }
  }, [navigate, refreshToken, token, user])

  return children
}

export default ProtectedRoute
