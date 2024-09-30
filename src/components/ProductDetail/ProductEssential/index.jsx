import ShowProduct from '../../ShowProduct'
import { useEffect, useState } from 'react'
import { ButtonColorBox } from '../Button'
import ButtonStorageBox from '../Button/ButtonStorage'
import Promotion from '../Promotion'
import Policy from '../Policy'
import { useDispatch } from 'react-redux'
import { addToVariantId } from '../../../redux/slice/ProductSlice'
import AddToCart from '../AddToCart'
const ProductEssential = ({ data, name }) => {
  const dispatch = useDispatch()
  const [typeCheck, setTypeCheck] = useState(0)
  useEffect(() => {
    dispatch(addToVariantId(data[typeCheck].id))
  }, [data, dispatch, typeCheck])

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
        <AddToCart />
        <Policy />
      </div>
    </div>
  )
}

export default ProductEssential
