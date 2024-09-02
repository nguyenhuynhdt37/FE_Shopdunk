import { useRef, useState } from 'react'
import { RxCaretRight } from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'
import {
  isEmailValid,
  isEmpty,
  isPasswordValid,
} from '../../../Utils/validation'
import LoadingBar from 'react-top-loading-bar'
import { registerApi } from '../../api/userApi'
const Register = () => {
  const ref = useRef(null)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  })
  const [error, setError] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setError({ ...error, [name]: '' })
    setFormData({ ...formData, [name]: value })
  }

  const checkinValidation = () => {
    let newErrors = {}
    if (isEmpty(formData.username)) {
      newErrors.username = 'Tên tài khoản không được bỏ trống'
    }
    if (!isEmpty(formData.username) && formData.username < 8) {
      newErrors.username = 'Tài khoản phải đủ từ 8 ký tự đổ lên'
    }
    if (isEmpty(formData.password) || !isPasswordValid(formData.password)) {
      newErrors.password =
        'Phải đáp ứng các quy tắc sau: phải có ít nhất 8 ký tự. Phải có ít nhất 8 ký tự trong đó có đặc biệt (ví dụ: #?!@$%^&*-)'
    }

    if (
      isEmpty(formData.confirmPassword) ||
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = 'Mật khẩu không trùng khớp'
    }

    if (isEmpty(formData.email) || !isEmailValid(formData.email)) {
      newErrors.email = 'địa chỉ Email không hợp lệ'
    }
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError({})
    const newErrors = checkinValidation()
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors)
      return
    }
    const dataPost = {
      username: formData.username,
      PasswordHash: formData.password,
      email: formData.email,
    }
    ref.current.continuousStart() // Bắt đầu thanh tiến trình
    const { data: valueData, error: valueError } = await registerApi(dataPost)
    if (valueError) {
      const codeError = valueError.response.data
      setError({
        ...error,
        username: codeError,
      })
    } else {
      console.log(valueData)
      navigate('/register/success')
    }
    ref.current.complete()
  }
  return (
    <div className="bg-white">
      <LoadingBar color="#0066df" ref={ref} />
      <div className="container mx-auto text-xl mb-40">
        <ul className="box-nav-bar py-3 flex leading-11 text-xl">
          <li className="item flex items-center">
            <Link to="/">Trang chủ</Link>
            <RxCaretRight className="w-10 relative top-0.5" />
          </li>
          <li className="item mr-2 flex items-center">
            <Link to="/">Đăng ký</Link>
          </li>
        </ul>
        <div className="content grid grid-cols-12 gap-x-5 py-24 px-8">
          <div className="img col-span-7 pe-20">
            <img
              className=" sticky top-72"
              src="https://shopdunk.com/images/uploaded/banner/TND_M402_010%201.jpeg"
              alt=""
              height="999"
            />
          </div>
          <div className="col-span-5">
            <div className="title text-5xl font-bold mb-10">Đăng Ký</div>
            <div className="box-input text-2xl mb-8">
              <div className="title mb-2 font-medium">Tên tài khoản:</div>
              <input
                className="px-4 py-5 border rounded-xl w-full focus:outline-none focus:border-primary1"
                type="text"
                name="username"
                value={formData.username}
                onChange={(e) => handleInputChange(e)}
              />
              {error.username && (
                <p className="error pt-3 text-red">{error.username}</p>
              )}
            </div>
            <div className="box-input text-2xl mb-8">
              <div className="title mb-2 font-medium">E-mail:</div>
              <input
                className="px-4 py-5 border rounded-xl w-full focus:outline-none focus:border-primary1"
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleInputChange(e)}
              />
              {error.email && (
                <p className="error pt-3 text-red">{error.email}</p>
              )}
            </div>
            <div className="box-input text-2xl mb-8">
              <div className="title mb-2 font-medium">Mật khẩu:</div>
              <input
                className="px-4 py-5 border rounded-xl w-full focus:outline-none focus:border-primary1"
                type="password"
                name="password"
                value={formData.password}
                onChange={(e) => handleInputChange(e)}
              />{' '}
              {error.password && (
                <p className="error pt-3 text-red">{error.password}</p>
              )}
            </div>
            <div className="warning p-3 text-1.5xl leading-10 mb-8 rounded-xl bg-zinc-100">
              Lưu ý: Mật khẩu phải có tối thiểu 8 ký tự bao gồm chữ, số và các
              ký tự đặc biệt
            </div>
            <div className="box-input text-2xl mb-8">
              <div className="title mb-2 font-medium">Nhập lại mật khẩu:</div>
              <input
                className="px-4 py-5 border rounded-xl w-full focus:outline-none focus:border-primary1"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange(e)}
              />
              {error.confirmPassword && (
                <p className="error pt-3 text-red">{error.confirmPassword}</p>
              )}
            </div>
            <p className="text-2xl text-zinc-600">
              Bằng việc đăng ký tài khoản Tôi đồng ý với các{' '}
              <a href="/" className="text-primary1">
                điều khoản bảo mật & sử dụng thông tin cá nhân{' '}
              </a>
              của shopdunk
            </p>
            <div
              className="btnsubmit mt-10 text-center py-6 bg-primary1 rounded-xl text-2xl text-white font-medium cursor-pointer "
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Đăng ký
            </div>
            <div className="text-2xl  pt-7">
              Bạn đã có tài khoản?{' '}
              <Link to="/login" className="ms-2 text-primary1">
                Đăng nhập ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
