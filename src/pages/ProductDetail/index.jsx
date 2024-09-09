import './ProductDetail.scss'
import ProductParameters from '../../components/ProductDetail/ProductParameters'
import { useEffect, useState } from 'react'
import { getDataProduct } from '../../api/ProductDetails'
import ErrorPage from '../ErrorPage'
import ProductEssential from '../../components/ProductDetail/ProductEssential'
import PageNavigation from '../../components/PageNavigation'

const ProductDetail = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    const getProduct = async () => {
      const productData = await getDataProduct()
      setData(productData)
    }
    getProduct()
  }, [])
  return (
    <div className="bg-white">
      {data && data !== null && data.variants ? (
        <div className="container mx-auto text-xl">
          <div className="product-deails container p-0">
            <PageNavigation />
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
