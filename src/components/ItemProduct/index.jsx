import React from 'react'
import './ItemProduct.scss'
import { Link } from 'react-router-dom'
import { formatCurrency } from '../../../Utils/formart'
const ItemProduct = ({ data }) => {
  return (
    <Link to={`/product/${data.id}`}>
      <div className="box-item bg-white">
        <div className="box-image pt-10 flex justify-center">
          <img
            src={data.imageCover}
            alt=""
            className="img object-cover w-full"
          />
        </div>
        <div className="info-product mt-10 mb-12 text-2.5xl font-bold ">
          <div className="product-name mr-2">{data.name}</div>
        </div>
        <div className="product-price flex text-2xl items-center pb-2">
          <div className="text-primary1 font-bold me-3">
            {formatCurrency(data.price)}
          </div>
          <div className="product__price--old me-3 text-2xl text-zinc-400">
            {formatCurrency(data.oldPrice)}
          </div>
          <div className="percent-discount text-2xl text-zinc-400">
            {Math.round(-((data.oldPrice - data.price) / data.oldPrice) * 100)}%
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ItemProduct
