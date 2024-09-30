import { useState } from 'react'
import './ProductParameters.scss'
import DescriptionParameter from './DescriptionParameter'
import ProductDescription from './ProductDescription'
import Details from '../Details'
function ProductParameters({ id }) {
  const [active, setActive] = useState(1)
  return (
    <div className="box-parameters mt-32">
      <div className="parameters-option text-center">
        <button
          type="button"
          onClick={() => setActive(1)}
          className={`${
            active === 1 && 'active'
          } mx-3 inline-block px-8 py-3.5 border-1  text-1.7xl rounded-xl`}
        >
          Mô tả sản phẩm
        </button>
        <button
          type="button"
          onClick={() => setActive(2)}
          className={`${
            active === 2 && 'active'
          } mx-3 inline-block px-8 py-3.5 border-1  text-1.7xl rounded-xl`}
        >
          Thông số kỹ thuật
        </button>
        <button
          type="button"
          onClick={() => setActive(3)}
          className={`${
            active === 3 && 'active'
          } mx-3 inline-block px-8 py-3.5 border-1  text-1.7xl rounded-xl`}
        >
          Chi tiết sản phẩm
        </button>
        <button
          type="button"
          onClick={() => setActive(4)}
          className={`${
            active === 4 && 'active'
          } mx-3 inline-block px-8 py-3.5 border-1  text-1.7xl rounded-xl`}
        >
          Thông số kỹ thuật
        </button>
        <div className="box-type py-20">
          {active === 1 && <ProductDescription id={id} active={active} />}
          {active === 2 && <DescriptionParameter id={id} />}
          {active === 3 && <Details id={id} />}
        </div>
      </div>
    </div>
  )
}

export default ProductParameters
