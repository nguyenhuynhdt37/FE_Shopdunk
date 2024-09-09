import ShowProduct from '../../ShowProduct'
import { useState } from 'react'
import { ButtonColorBox } from '../Button'
import ButtonStorageBox from '../Button/ButtonStorage'
import Promotion from '../Promotion'
import Policy from '../Policy'
const ProductEssential = ({ data, name }) => {
  const [typeCheck, setTypeCheck] = useState(0)

  return (
    <div className=" relative grid grid-cols-2 product-box">
      <ShowProduct imageProduct={data[typeCheck].images} />
      <div className="ps-14  pb-16">
        <h4 className="product_name text-4xl font-bold mb-3">{name}</h4>
        <div className="h-0.5 bg-slate-200"></div>
        <ButtonStorageBox storages={data[typeCheck].memoryOptions} />
        <div className="product_color mt-8">
          <div className="title mb-6">Color</div>
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
