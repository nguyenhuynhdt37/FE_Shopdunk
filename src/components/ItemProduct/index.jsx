import './ItemProduct.scss'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../../../Utils/formart'
const ItemProduct = ({ data }) => {
  return (
    <Link to={`/product/${data.id}`}>
      <div className="box-item font-custom bg-white">
        <div className="box-image mt-14 w-96 h-96 flex justify-center">
          <img
            src={data && data.avatar}
            alt=""
            className="img object-cover h-full"
          />
        </div>
        <div className="info-product mt-10  text-2.5xl font-bold flex">
          <div className="product-name h-24 mr-2">{data.name}</div>
          <div className="product-name mr-2">
            {data && data?.variants[0]?.memoryOptions[0]?.storage}
          </div>
        </div>
        <div className="product-price flex text-2xl items-center pb-2">
          <div className="text-primary1 font-bold mr-3">
            {formatCurrency(data && data?.variants[0]?.memoryOptions[0]?.price)}
          </div>
          <div className="product__price--old mr-5 text-2xl text-zinc-400">
            {formatCurrency(
              data && data.variants[0]?.memoryOptions[0]?.oldPrice
            )}
          </div>
          <div className="percent-discount text-2xl text-zinc-400">
            {Math.round(
              -(
                (data.variants[0]?.memoryOptions[0]?.oldPrice -
                  data.variants[0]?.memoryOptions[0]?.price) /
                data.variants[0]?.memoryOptions[0]?.oldPrice
              ) * 100
            )}
            %
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ItemProduct
