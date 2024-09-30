import { Link } from 'react-router-dom'

const CartEmpty = () => {
  return (
    <div className=" text-center py-20">
      <div className="flex justify-center">
        <img className="w-52" src="/assets/icons/cart/empty-box.png" alt="" />
      </div>
      <div className="py-10 font-bold text-3xl">Giỏ hàng trống</div>
      <div className="text-2xl font-medium mb-10">
        Hãy thoải mái lựa sản phẩm bạn nhé.
      </div>
      <Link to="/">
        <button className="px-6 rounded-xl py-4 text-2xl bg-primary1 text-[#fff]">
          Khám phá ngay
        </button>
      </Link>
    </div>
  )
}

export default CartEmpty
