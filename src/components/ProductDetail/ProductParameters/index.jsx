import { useState } from 'react'
import './ProductParameters.scss'
import DescriptionParameter from './DescriptionParameter'
import ProductDescription from './ProductDescription'
function ProductParameters({ describe, details }) {
  const [active, setActive] = useState(0)
  return (
    <div className="box-parameters mt-32">
      <div className="parameters-option text-center">
        <button
          type="button"
          onClick={() => setActive(0)}
          className={`${
            active === 0 && 'active'
          } mx-3 inline-block px-8 py-3.5 border-1  text-1.7xl rounded-xl`}
        >
          Mô tả sản phẩm
        </button>
        <button
          type="button"
          onClick={() => setActive(1)}
          className={`${
            active === 1 && 'active'
          } mx-3 inline-block px-8 py-3.5 border-1  text-1.7xl rounded-xl`}
        >
          Thông số kỹ thuật
        </button>
        <div className="box-type py-20">
          {active === 0 ? (
            describe.map((item, index) => (
              <ProductDescription key={index} value={item} />
            ))
          ) : (
            <DescriptionParameter data={details} />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductParameters
