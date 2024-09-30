import { RxCaretRight } from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'
import Promotion from '../../components/Cart/Promotion'
import CartTotal from '../../components/Cart/CartTotal'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect, useState } from 'react'
import CartEmpty from '../../components/Cart/CartEmpty'
import { getdataOrder } from '../../redux/slice/CartSlice'
import CartToOrder from '../../components/Cart/CartToOrder'

const CartPage = () => {
  const { totalCount } = useSelector((state) => state.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [continus, setContinus] = useState(false)
  const { token } = useSelector((state) => state.auth)
  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        dispatch(getdataOrder(token))
      }
    }
    fetchData()
  }, [dispatch, navigate, token])
  const handleContinus = useCallback((check) => {
    setContinus(check)
  }, [])
  return (
    <div className="cart-page pb-20">
      {totalCount === 0 ? (
        <CartEmpty />
      ) : (
        <div className="text-[1.45rem]  text-gray-800 bg-white">
          <div className="bg-[#fff] z-10 sticky top-[6.4rem]">
            <ul className=" list-url flex py-5 container px mx-auto">
              <li className="url mr-2 flex items-center ">
                <Link to="/">Trang chủ</Link>
                <RxCaretRight className="w-10 ms-2" />
              </li>
              <li className="url flex items-center">
                Giỏ hàng
                <span className="text-[#fe3464] ps-2">{`(${totalCount})`}</span>
              </li>
            </ul>
          </div>
          <div className=" pt-[2rem] bg-[#f6f9fc]">
            <div className="container mx-auto grid grid-cols-3 gap-8">
              <CartToOrder continus={continus} />
              <div className="">
                <div className="sticky top-[13rem]">
                  <Promotion />
                  <CartTotal onSubmit={handleContinus} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default CartPage
