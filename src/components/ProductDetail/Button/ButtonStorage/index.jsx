import { useEffect, useState } from 'react'
import ButtonStorage from './ButtonStorage'
import { formatCurrency } from '../../../../../Utils/formart'
import { FaStar } from 'react-icons/fa6'
const ButtonStorageBox = ({ storages, name }) => {
  const [data, setData] = useState(storages[0])
  const [active, setActive] = useState(0)
  useEffect(() => {
    setData(storages[0])
    setActive(0)
  }, [storages])
  const handleSelect = (storage, id) => {
    setActive(id)

    setData(storage)
  }
  return (
    <>
      <h4 className="product_name text-4xl text-[#333] font-bold mb-3">
        {name} {data.storage}
      </h4>
      <div className="start text-2xl mb-5 pt-5 flex text-[#feb700]">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className="h-0.5 bg-slate-200"></div>
      <div className="product-price flex mt-7 text-2xl items-center">
        <div className="current-price text-4xl font-bold mr-8 text-primary1">
          {formatCurrency(data.price)}
        </div>
        <div className="old-price text-2xl text-[#999999] line-through">
          {formatCurrency(data.oldPrice)}
        </div>
      </div>
      <div className="mb-9 pt-2 text-2xl text-[#999999]">
        (Đã bao gồm phí VAT)
      </div>
      <div className="product_storage">
        <div className="title mb-6">Dung lượng</div>
        <div className="btn-storage flex ">
          {storages.map((storage, index) => (
            <ButtonStorage
              isActive={active}
              id={index}
              key={index}
              onSelect={handleSelect}
              storage={storage}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default ButtonStorageBox
