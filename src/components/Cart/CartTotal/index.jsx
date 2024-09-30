import { useSelector } from 'react-redux'
import { formatCurrency } from '../../../../Utils/formart'
import { memo } from 'react'

const CartTotal = memo(({ onSubmit }) => {
  const { totalPrice, totalDiscount } = useSelector((state) => state.cart)
  return (
    <div className="bg-white mt-7 rounded-xl p-7 cursor-pointer">
      <div className="text-2.5xl font-bold mb-4">Tóm tắt đơn hàng</div>
      <div className="flex justify-between py-4">
        <div className="">Tổng tiền</div>
        <div className="price">{formatCurrency(totalPrice)}</div>
      </div>
      <div className="flex justify-between py-4 border-b-1">
        <div className="">Số tiền được giảm giá</div>
        <div className="price">{formatCurrency(totalDiscount)}</div>
      </div>
      <div className="flex justify-between items-center py-4">
        <div className="">Tổng cộng</div>
        <div className="price text-3xl py-4 font-bold text-[#dc2626]">
          {formatCurrency(totalPrice - totalDiscount)}
        </div>
      </div>
      <button
        onClick={() => onSubmit(true)}
        className="w-full text-[#fff] rounded-xl py-5 bg-[#dc2626]"
      >
        Đặt hàng
      </button>
    </div>
  )
})

export default CartTotal
