import Tippy from '@tippyjs/react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { totalCount } = useSelector((state) => state.cart)
  return (
    <Tippy content="Cart" theme="light" arrow={true}>
      <div className="icon-cart mr-4 relative">
        <Link to="/cart">
          <img src="/assets/icons/icon-cart.png" className="w-9" alt="" />
          {totalCount !== 0 && (
            <div
              className={`${totalCount > 99 ? 'w-9 -right-3' : 'w-6 -right-1'}  rounded-full h-6 text-[0.9rem] -bottom-2  absolute font-bold text-[#7b7777] bg-[#fff] flex items-center justify-center`}
            >
              {totalCount > 99 ? '99+' : totalCount}
            </div>
          )}
        </Link>
      </div>
    </Tippy>
  )
}

export default Cart
