import { useState } from 'react'
import './ProductParameters.scss'
import DescriptionParameter from './DescriptionParameter'
import ProductDescription from './ProductDescription'
const imageProductDecsriptions = [
  {
    id: 0,
    img: 'https://shopdunk.com/images/uploaded/html/iphone-13-256gb-260423-031651.jpg',
  },
  {
    id: 1,
    img: 'https://shopdunk.com/images/uploaded/html/iphone-13-256gb-071021-020308.jpg',
  },
  {
    id: 2,
    img: 'https://shopdunk.com/images/uploaded/html/iphone-13-256gb-071021-020302.jpg',
  },
  {
    id: 3,
    img: 'https://shopdunk.com/images/uploaded/html/iphone-13-256gb-071021-020303.jpg',
  },
  {
    id: 4,
    img: 'https://shopdunk.com/images/uploaded/html/iphone-13-256gb-071021-020303-1.jpg',
  },
  {
    id: 5,
    img: 'https://shopdunk.com/images/uploaded/html/iphone-13-256gb-071021-020303.jpg',
  },
  {
    id: 6,
    img: 'https://shopdunk.com/images/uploaded/html/iphone-13-256gb-071021-020305.jpg',
  },
  {
    id: 7,
    img: 'https://shopdunk.com/images/uploaded/html/iphone-13-256gb-071021-020306.jpg',
  },
  {
    id: 8,
    img: 'https://shopdunk.com/images/uploaded/html/iphone-13-256gb-221021-035733.jpg',
  },
]
function ProductParameters() {
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
            imageProductDecsriptions.map((item) => (
              <ProductDescription key={item.id} value={item} />
            ))
          ) : (
            <DescriptionParameter />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductParameters
