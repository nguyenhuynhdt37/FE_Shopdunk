import React from 'react'
import { Link } from 'react-router-dom'
import { RxCaretRight } from 'react-icons/rx'
const CartPage = () => {
  return (
    <div className="cart-page bg-backgroudDefault">
      <div className="nav">
        <ul className="flex w-full text-textcolor text-lg leading-11 p-2 bg-white">
          <li className="flex items-center">
            <Link to="/">Trang chủ</Link>
            <RxCaretRight />
          </li>
          <li>Giỏ hàng</li>
        </ul>
      </div>
    </div>
  )
}

export default CartPage
