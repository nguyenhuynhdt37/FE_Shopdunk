import { useState } from 'react'
import { MdLocationOn } from 'react-icons/md'
const StoreInfo = () => {
  const [address, setAddress] = useState(1)
  return (
    <div>
      <h1 className="py-5 font-bold">Thành phố Hồ Chí Minh</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-5 rounded-xl flex items-center bg-[#f6f9fc]">
          <div className="">
            <div
              className={`${address === 1 && 'border-[0.5rem] border-[#0065ee]'} relative top-[0.05rem] w-7 h-7 rounded-full border-2 mr-4 cursor-pointer`}
              onClick={() => setAddress(1)}
            ></div>
          </div>
          <div className="">
            Số 5 - 7 Nguyễn Huy Tưởng, Phường 6, Quận Bình Thạnh, Hồ Chí Minh
            <a
              href="https://www.google.com/maps/place/ThinkPro+-+S%E1%BB%91+5+%2B+7+Nguy%E1%BB%85n+Huy+T%C6%B0%E1%BB%9Fng,+P6,+Q.B%C3%ACnh+Th%E1%BA%A1nh,+TP+HCM/@10.7984083,106.686565,15z/data=!4m12!1m6!3m5!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!2zVGhpbmtQcm8gLSBT4buRIDUgKyA3IE5ndXnhu4VuIEh1eSBUxrDhu59uZywgUDYsIFEuQsOsbmggVGjhuqFuaCwgVFAgSENN!8m2!3d10.8041258!4d106.6893028!3m4!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!8m2!3d10.8041258!4d106.6893028"
              className="flex items-center pt-2 text-[#0065ee] font-bold text-[1.15rem]"
              target="_blank"
              rel="noreferrer"
            >
              <MdLocationOn className="mr-2 text-2xl" />
              Chỉ Đường
            </a>
          </div>
        </div>
        <div className="p-5 rounded-xl flex items-center bg-[#f6f9fc]">
          <div className="">
            <div
              className={`${address === 2 && 'border-[0.5rem] border-[#0065ee]'} relative top-[0.05rem] w-7 h-7 rounded-full border-2 mr-4 cursor-pointer`}
              onClick={() => setAddress(2)}
            ></div>
          </div>
          <div className="">
            Số 5 - 7 Nguyễn Huy Tưởng, Phường 6, Quận Bình Thạnh, Hồ Chí Minh
            <a
              href="https://www.google.com/maps/place/ThinkPro+-+S%E1%BB%91+5+%2B+7+Nguy%E1%BB%85n+Huy+T%C6%B0%E1%BB%9Fng,+P6,+Q.B%C3%ACnh+Th%E1%BA%A1nh,+TP+HCM/@10.7984083,106.686565,15z/data=!4m12!1m6!3m5!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!2zVGhpbmtQcm8gLSBT4buRIDUgKyA3IE5ndXnhu4VuIEh1eSBUxrDhu59uZywgUDYsIFEuQsOsbmggVGjhuqFuaCwgVFAgSENN!8m2!3d10.8041258!4d106.6893028!3m4!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!8m2!3d10.8041258!4d106.6893028"
              className="flex items-center pt-2 text-[#0065ee] font-bold text-[1.15rem]"
              target="_blank"
              rel="noreferrer"
            >
              <MdLocationOn className="mr-2 text-2xl" />
              Chỉ Đường
            </a>
          </div>
        </div>
      </div>
      <h1 className="py-5 font-bold">Hà Nội</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-5 rounded-xl flex items-center bg-[#f6f9fc]">
          <div className="">
            <div
              className={`${address === 3 && 'border-[0.5rem] border-[#0065ee]'} relative top-[0.05rem] w-7 h-7 rounded-full border-2 mr-4 cursor-pointer`}
              onClick={() => setAddress(3)}
            ></div>
          </div>
          <div className="">
            Số 5 - 7 Nguyễn Huy Tưởng, Phường 6, Quận Bình Thạnh, Hồ Chí Minh
            <a
              href="https://www.google.com/maps/place/ThinkPro+-+S%E1%BB%91+5+%2B+7+Nguy%E1%BB%85n+Huy+T%C6%B0%E1%BB%9Fng,+P6,+Q.B%C3%ACnh+Th%E1%BA%A1nh,+TP+HCM/@10.7984083,106.686565,15z/data=!4m12!1m6!3m5!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!2zVGhpbmtQcm8gLSBT4buRIDUgKyA3IE5ndXnhu4VuIEh1eSBUxrDhu59uZywgUDYsIFEuQsOsbmggVGjhuqFuaCwgVFAgSENN!8m2!3d10.8041258!4d106.6893028!3m4!1s0x31752943e43adcc3:0x9802bcb6ef6056f9!8m2!3d10.8041258!4d106.6893028"
              className="flex items-center pt-2 text-[#0065ee] font-bold text-[1.15rem]"
              target="_blank"
              rel="noreferrer"
            >
              <MdLocationOn className="mr-2 text-2xl" />
              Chỉ Đường
            </a>
          </div>
        </div>
      </div>
      <h1 className="py-5 font-bold">Thông tin người nhận</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="">
          <h1 className="pb-2">Họ Và Tên</h1>
          <input
            type="text"
            className="w-full rounded-xl py-[0.7rem] px-4 focus:outline-[#0065ee] focus:border-[0.05rem] bg-[#f6f9fc]"
          />
        </div>
        <div className="">
          <h1 className="pb-2">Số điện thoại</h1>
          <input
            type="text"
            className="w-full rounded-xl py-[0.7rem] px-4 focus:outline-[#0065ee] focus:border-[0.05rem] bg-[#f6f9fc]"
          />
        </div>
      </div>
    </div>
  )
}

export default StoreInfo
