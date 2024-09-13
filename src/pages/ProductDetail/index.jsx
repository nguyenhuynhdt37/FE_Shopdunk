import './ProductDetail.scss'
import ProductParameters from '../../components/ProductDetail/ProductParameters'
import { getDataProduct } from '../../api/ProductDetails'
import ErrorPage from '../ErrorPage'
import ProductEssential from '../../components/ProductDetail/ProductEssential'
import PageNavigation from '../../components/PageNavigation'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { useEffect, useState } from 'react'

const ProductDetail = () => {
  const { id } = useParams()
  const [navigation, setNavigation] = useState([])
  const { data, isLoading, error } = useQuery(
    ['products', id],
    getDataProduct,
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    }
  )

  useEffect(() => {
    if (data && data.categoryName && data.categoryId) {
      const nav = [
        {
          name: data.categoryName,
          id: data.categoryId,
        },
        {
          name: data.name,
          id: id,
        },
      ]
      setNavigation(nav)
    }
  }, [data, id])

  return (
    <div className="bg-white">
      {!error && !isLoading && data.variants ? (
        <div className="container mx-auto text-xl">
          <div className="product-deails container p-0">
            <PageNavigation data={navigation} />
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
