import { useState } from 'react'
import './ProductParameters.scss'
import DescriptionParameter from './DescriptionParameter'
import ProductDescription from './ProductDescription'
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
          Thông số kỹ thuật
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
          <ProductDescription id={id} />
          {/* <DescriptionParameter /> */}
        </div>
      </div>
    </div>
  )
}

export default ProductParameters
