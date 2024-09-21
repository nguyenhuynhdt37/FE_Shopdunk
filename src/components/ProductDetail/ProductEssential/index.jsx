import ShowProduct from '../../ShowProduct'
import { useState } from 'react'
import { ButtonColorBox } from '../Button'
import ButtonStorageBox from '../Button/ButtonStorage'
import Promotion from '../Promotion'
import Policy from '../Policy'
import { FaStar } from 'react-icons/fa6'
const ProductEssential = ({ data, name, isNewProduct }) => {
  const [typeCheck, setTypeCheck] = useState(0)
  console.log('data variant', data)

  return (
    <div className=" relative grid grid-cols-2 text-[1.3rem] text-[#515154] product-box">
      <ShowProduct medias={data[typeCheck].medias} />

      <div className="ps-14  pb-16">
        <ButtonStorageBox
          name={name}
          storages={data[typeCheck].memoryOptions}
        />

        <div className="product_color mt-8">
          <div className="title mb-6">Màu sắc: {data[typeCheck].color}</div>
          <ButtonColorBox
            data={data}
            typeCheck={typeCheck}
            onTypeCheck={(index) => setTypeCheck(index)}
          />
        </div>
        <Promotion />
        <button
          type="button"
          className="btn rounded-xl bg-primary1 text-white w-full h-24 text-2xl font-bold uppercase mt-8 btn-primary"
        >
          Buy Now
        </button>
        <Policy />
      </div>
    </div>
  )
}

export default ProductEssential
