import { useParams } from 'react-router-dom'
import ListCategory from '../../components/Category'
import PageNavigation from '../../components/PageNavigation'
import { SlideBanner } from '../../components/Slide'
import { useQuery } from 'react-query'
import { getProductSeries } from '../../api/Category'

import CategoryDetails from '../../components/Category/CategoryDetails'
import Loading from '../../components/Loading'

const Category = () => {
  const { id } = useParams()
  const { data, isLoading } = useQuery(
    ['get_product-series_by_category', id],
    getProductSeries,
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    }
  )
  return (
    <div className="text-1.5xl bg-backgroudDefault pb-20">
      {data && (
        <>
          <PageNavigation data={data} />
          <div className="content container mx-auto  text-center">
            <h1 className="title font-bold text-[3.5rem] pt-5 pb-5 text-[#2d2d2f]">
              {data?.name}
            </h1>
            <div className="box max-w-full rounded-2xl">
              <SlideBanner />
              <ListCategory data={data.productSeries} categoryId={data.id} />
            </div>
            <CategoryDetails data={data.categoryDetail} />
          </div>
        </>
      )}
      {isLoading && <Loading />}
    </div>
  )
}

export default Category
