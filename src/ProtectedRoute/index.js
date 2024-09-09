import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const { token, user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (token && user) {
      return navigate('/')
    }
  }, [navigate, token, user])

  return children
}

export default ProtectedRoute
