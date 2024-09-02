import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const { token, user } = useSelector((state) => state.auth)

  useEffect(() => {
    console.log(token, user)

    if (token && user) {
      return navigate('/')
    }
  }, [])

  return children
}

export default ProtectedRoute
