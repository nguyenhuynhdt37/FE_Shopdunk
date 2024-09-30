import { useState } from 'react'
import StoreInfo from './StoreInfo'
import { HiMiniChevronLeft } from 'react-icons/hi2'
const Order = () => {
  const [type, setType] = useState(false)
  return (
    <div className="col-span-2 bg-[#fff] p-10">
      <button className="text-primary1 pb-5 hover:decoration-slice font-medium flex items-center">
        <HiMiniChevronLeft className="text-3xl relative top-[0.15rem]" />
        quay lại
      </button>
      <h1 className="text-3xl font-bold">Phương thức nhận hàng</h1>
      <div className="flex pt-10 pb-10 border-b-1">
        <div className="flex items-center mr-14 ">
          <div
            className={`${!type && 'border-[0.5rem] border-[#0065ee]'} relative top-[0.05rem] w-7 h-7 rounded-full border-2 mr-4 cursor-pointer`}
            onClick={() => setType(false)}
          ></div>
          Tại cửa hàng
        </div>
        <div className="flex items-center">
          <div
            className={`${type && 'border-[0.5rem] border-[#0065ee]'} relative top-[0.05rem] w-7 h-7 rounded-full border-2 mr-4 cursor-pointer`}
            onClick={() => setType(true)}
          ></div>
          Tại cửa hàng
        </div>
      </div>
      {!type && <StoreInfo />}
    </div>
  )
}

export default Order
