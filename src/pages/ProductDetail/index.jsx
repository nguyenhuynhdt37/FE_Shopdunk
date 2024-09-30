import './ProductDetail.scss'
import ProductParameters from '../../components/ProductDetail/ProductParameters'
import { getDataProduct, getNavProduct } from '../../api/ProductDetails'
import ErrorPage from '../ErrorPage'
import ProductEssential from '../../components/ProductDetail/ProductEssential'
import PageNavigation from '../../components/PageNavigation'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import Loading from '../../components/Loading'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addToProductId } from '../../redux/slice/ProductSlice'

const ProductDetail = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const {
    data: productData,
    error: errorProduct,
    isLoading,
  } = useQuery(['products', id], getDataProduct, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  })

  const { data: dataNav } = useQuery(['nav', id], getNavProduct, {
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  })
  useEffect(() => {
    if (productData) {
      console.log('hukafkahs')

      dispatch(addToProductId(id))
    }
  }, [dispatch, id, productData])
  console.log('>> product data', productData)
  return (
    <div className="bg-white font-custom">
      {productData && productData.variants && (
        <div className="container mx-auto text-xl">
          <div className="product-deails container p-0">
            <PageNavigation data={dataNav} />
            <ProductEssential
              data={productData && productData.variants}
              name={productData && productData.name}
            />
            <ProductParameters id={id} />
          </div>
        </div>
      )}
      {errorProduct && <ErrorPage />}
      {isLoading && <Loading />}
    </div>
  )
}

export default ProductDetail
