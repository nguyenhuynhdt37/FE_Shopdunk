import { memo } from 'react'
import { IoIosCheckmarkCircle } from 'react-icons/io'

const Policy = () => {
  return (
    <div className="prd-policy rounded-xl p-6 border-1 mt-7 leading-10">
      <div className="polocy-item flex items-center">
        <IoIosCheckmarkCircle className="text-3xl mr-4 text-primary1" />
        Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C
      </div>
      <div className="polocy-item flex items-center">
        <IoIosCheckmarkCircle className="text-3xl mr-4 text-primary1" />
        Giao hàng nhanh toàn quốc
        <a href="" className="font-bold ms-2 text-primary1">
          (chi tiết)
        </a>
      </div>
      <div className="polocy-item flex items-center">
        <IoIosCheckmarkCircle className="text-3xl mr-4 text-primary1" />
        Bảo hành chính hãng 1 năm
        <a href="" className="font-bold ms-2 text-primary1">
          (chi tiết)
        </a>
      </div>
      <div className="polocy-item flex items-center">
        <IoIosCheckmarkCircle className="text-3xl mr-4 text-primary1" />
        Gọi đặt mua
        <span className="text-primary1 mx-2">1900.6626</span>
        <a href="tel:19006626" className="font-bold  text-primary1">
          (chi tiết)
        </a>
      </div>
    </div>
  )
}

export default memo(Policy)
