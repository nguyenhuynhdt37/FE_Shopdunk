import { useRef, useState, useEffect } from 'react'
import { RxCaretRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { isEmpty, isPasswordValid } from '../../../Utils/validation'
import {
  useGetUserByTokenQuery,
  useLoginMutation,
} from '../../redux/api/userApi'
import { useDispatch } from 'react-redux'
import {
  setTokenAndRefestToken,
  setUserInfo,
} from '../../redux/slice/UserSlice'

const Login = () => {
  const dispatch = useDispatch()
  const ref = useRef()
  const [data, setData] = useState({ username: '', password: '' })
  const [dataError, setDataError] = useState({})
  const [rememberMe, setRememberMe] = useState(true)
  const [login] = useLoginMutation()
  const [token, setToken] = useState(null)

  const { refetch } = useGetUserByTokenQuery(null, { skip: !token })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
    setDataError({ ...dataError, [name]: '', sever: [] })
  }

  const checkinValidation = () => {
    let newError = {}
    if (isEmpty(data.username))
      newError.username = 'Tài khoản không được bỏ trống'
    if (!(!isEmpty(data.password) && isPasswordValid(data.password))) {
      newError.password =
        'Mật khẩu phải bao gồm 8 chữ số bao gồm chữ hoa, chữ thường và ký tự đặc biệt'
    }
    return newError
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setDataError({})

    const listError = checkinValidation()
    if (Object.keys(listError).length > 0) {
      setDataError(listError)
      return
    }

    ref.current.continuousStart()

    const datapost = {
      userName: data.username,
      password: data.password,
    }

    try {
      const response = await login(datapost).unwrap()
      dispatch(setTokenAndRefestToken({ data: response }))
      console.log(response)

      setToken(response.token)

      if (rememberMe) {
        localStorage.setItem('refreshToken', response.refreshToken)
        localStorage.setItem('token', response.token)
      }
    } catch (err) {
      console.error('Error during login or fetching user data:', err)
      if (err.data) {
        setDataError({ ...dataError, sever: err.data })
      } else {
        setDataError({
          ...dataError,
          sever: ['Có lỗi xảy ra', 'Vui lòng thử lại sau'],
        })
      }
    } finally {
      ref.current.complete()
    }
  }

  useEffect(() => {
    if (token && refetch) {
      const fetchUserData = async () => {
        try {
          const user = await refetch().unwrap()
          dispatch(setUserInfo({ user }))
        } catch (err) {
          console.error('Error fetching user data:', err)
        }
      }
      fetchUserData()
    }
  }, [token, refetch, dispatch])

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
            <Link to="/">Đăng nhập</Link>
          </li>
        </ul>
        <div className="content grid grid-cols-12 gap-x-5 py-24 px-8">
          <div className="img col-span-7 pe-20">
            <img
              className="sticky top-72"
              src="https://shopdunk.com/images/uploaded/banner/VNU_M492_08%201.jpeg"
              alt=""
              height="999"
            />
          </div>
          <div className="col-span-5">
            {dataError.sever && (
              <div className="error pb-10">
                {dataError.sever.map((value, index) => (
                  <div className="error text-red text-2xl mb-30" key={index}>
                    {value}
                  </div>
                ))}
              </div>
            )}

            <div className="title text-5xl font-medium mb-10">Đăng nhập</div>
            <div className="box-input text-2xl mb-8 pt-10">
              <div className="title mb-2 font-medium">Tên tài khoản:</div>
              <input
                className="px-4 py-5 border rounded-xl w-full focus:outline-none focus:border-primary1"
                type="text"
                name="username"
                value={data.username}
                onChange={handleInputChange}
              />
              {dataError.username && (
                <p className="error pt-3 text-red">{dataError.username}</p>
              )}
            </div>
            <div className="box-input text-2xl mb-8">
              <div className="title mb-2 font-medium">Mật khẩu:</div>
              <input
                className="px-4 py-5 border rounded-xl w-full focus:outline-none focus:border-primary1"
                type="password"
                name="password"
                value={data.password}
                onChange={handleInputChange}
              />
              {dataError.password && (
                <p className="error pt-3 text-red">{dataError.password}</p>
              )}
            </div>
            <div className="function-more flex px-2 text-2xl justify-between">
              <div className="save-password flex items-center text-zinc-500">
                <input
                  type="checkbox"
                  className="cursor-pointer mr-4 w-[1.6rem] h-[1.6rem]"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Nhớ mật khẩu
              </div>
              <div className="forget-password">
                <Link to="/" className="text-primary1">
                  Quên mật khẩu?
                </Link>
              </div>
            </div>
            <div
              className="btnsubmit mt-10 text-center py-6 bg-primary1 rounded-xl text-2xl text-white font-medium cursor-pointer"
              onClick={handleSubmit}
            >
              Đăng nhập
            </div>
            <div className="create text-[1.6rem] pt-6">
              <span className="me-4">Bạn chưa có tài khoản?</span>
              <Link to="/register" className="text-primary1">
                Tạo tài khoản ngay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
