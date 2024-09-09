import { Link } from 'react-router-dom'
import './ProductDetail.scss'
import ProductParameters from '../../components/ProductDetail/ProductParameters'
import { RxCaretRight } from 'react-icons/rx'
import { useEffect, useState } from 'react'
import { getDataProduct } from '../../api/ProductDetails'
import ErrorPage from '../ErrorPage'
import ProductEssential from '../../components/ProductDetail/ProductEssential'

const ProductDetail = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    const getProduct = async () => {
      const productData = await getDataProduct()
      console.log(productData)
      setData(productData)
    }
    getProduct()
  }, [])
  return (
    <div className="bg-white">
      {data && data.variants ? (
        <div className="container mx-auto text-xl">
          <div className="product-deails container p-0">
            <ul className="list-url  flex py-4 text-1.5xl text-gray-700">
              <li className="url mr-2 flex items-center ">
                <Link to="/">Home</Link>
                <RxCaretRight className="w-10 ms-2" />
              </li>
              <li className="url  flex items-center">
                <Link to="/">iPhone</Link>
                <RxCaretRight className="w-10 ms-2" />
              </li>
              <li className="url  flex items-center">
                <Link to="/">{data.name}</Link>
              </li>
            </ul>
            <ProductEssential data={data.variants} name={data.name} />
            <ProductParameters
              describe={data.describe}
              details={data.productDetails}
            />
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </div>
  )
}

export default ProductDetail
