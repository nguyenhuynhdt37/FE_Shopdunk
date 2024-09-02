// utils/validation.js
export const isPasswordValid = (password) => {
  const minLength = 8
  const hasNumber = /\d/
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/
  const hasLetter = /[a-zA-Z]/

  if (
    password.length >= minLength &&
    hasNumber.test(password) &&
    hasSpecialChar.test(password) &&
    hasLetter.test(password)
  ) {
    return true
  }
  return false
}

export const isEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return false
  }
  return true
}
export const isEmpty = (value) => {
  if (value == null || value == undefined) return true
  return value.trim() === ''
}
