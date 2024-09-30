import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import ListProductSeries from '../../components/ProductSeries/ListProductSeries'
import ProductSeriesDetails from '../../components/ProductSeries/ProductSeriesDetails'
import { getProductSeriesInfo } from '../../api/ProductSeries'
import PageNavigation from '../../components/PageNavigation'
import Loading from '../../components/Loading'

const ProductSeries = () => {
  const { id } = useParams()
  const { data: productSeries, isLoading } =
    (['get_product_by_cateogry', id],
    getProductSeriesInfo,
    {
      refetchOnWindowFocus: false,
    })
  return (
    <div className="text-1.5xl bg-backgroudDefault pb-20">
      {productSeries && (
        <>
          <PageNavigation data={productSeries} />
          <div className="content container mx-auto  text-center">
            <h1 className="title font-bold text-[3.5rem] pt-5 pb-5 text-[#2d2d2f]">
              {productSeries?.name}
            </h1>
            <div className="box max-w-full rounded-2xl">
              <ListProductSeries id={id} />
            </div>
            <ProductSeriesDetails data={productSeries?.productSeriesDetail} />
          </div>
        </>
      )}
      {isLoading && <Loading />}
    </div>
  )
}

export default ProductSeries
