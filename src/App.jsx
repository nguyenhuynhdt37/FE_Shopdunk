import { useEffect } from 'react'
import Footer from './layouts/Footter'
import Header from './layouts/Header'
import AppRouters from './Routers'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserByTokenQuery } from './redux/api/userApi'
import { setInfoUser } from './redux/slice/UserSlice'
import ScrollToTopButton from './components/ScrollToTopButton'
const App = () => {
  const token =
    useSelector((state) => state.auth.token) ||
    localStorage.getItem('token') ||
    sessionStorage.getItem('token')
  console.log(token)

  const { data: user } = useGetUserByTokenQuery(null, {
    skip: !token,
  })
  const dispatch = useDispatch()
  useEffect(() => {
    if (token && user) {
      dispatch(setInfoUser({ token, user }))
    }
  }, [dispatch, token, user])
  return (
    <div className="box-root w-100 relative">
      <Header />
      <div className="w-full m-0 bg-backgroudDefault">
        <AppRouters />
      </div>
      <footer>
        <Footer />
      </footer>
      <ScrollToTopButton />
    </div>
  )
}

export default App
