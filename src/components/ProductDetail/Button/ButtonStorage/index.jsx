import { useEffect, useState } from 'react'
import ButtonStorage from './ButtonStorage'
import { formatCurrency } from '../../../../../Utils/formart'
const ButtonStorageBox = ({ storages }) => {
  console.log('storage: ', storages)
  const [data, setData] = useState(storages[0])
  const [active, setActive] = useState(0)
  useEffect(() => {
    setData(storages[0])
    setActive(0)
  }, [storages])
  const handleSelect = (storage, id) => {
    console.log('Storw', storage)
    setActive(id)

    setData(storage)
  }
  return (
    <>
      <div className="product-price flex mt-7 mb-9 items-center">
        <div className="current-price text-4xl font-bold mr-8 text-primary1">
          {formatCurrency(data.price)}
        </div>
        <div className="old-price text-2.5xl text-color-old line-through">
          {formatCurrency(data.oldPrice)}
        </div>
      </div>
      <div className="product_storage">
        <div className="title mb-6">Storage</div>
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
