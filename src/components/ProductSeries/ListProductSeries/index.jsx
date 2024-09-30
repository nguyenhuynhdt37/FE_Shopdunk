import { useQuery } from 'react-query'
import { memo, useState } from 'react'
import ListProduct from '../../Category/ListProduct'
import { getAllProductByProductSeriesID } from '../../../api/ProductSeries'
import Loading from '../../Loading'
const Listdataeries = memo(({ id }) => {
  const initPageSize = 1
  const [pageNumber] = useState(1)
  const [pageSize, setPageSize] = useState(initPageSize)
  const { data, refetch, isLoading } = useQuery(
    ['get_product_by_cateogry', id, pageNumber, pageSize],
    getAllProductByProductSeriesID,
    {
      refetchOnWindowFocus: false,
    }
  )
  console.log('data', data)

  const handlePageMore = async () => {
    setPageSize((prev) => prev + initPageSize)
    refetch()
  }
  return (
    <div className="text-2xl">
      {data && (
        <>
          <ListProduct data={data?.products} />
          {data.totalPages !== 1 && (
            <button
              onClick={handlePageMore}
              className="px-52 rounded-xl hover:bg-[#4182c3] hover:text-white text-primary1 font-medium py-[1.45rem] bg-white"
            >
              Xem thêm
            </button>
          )}
        </>
      )}
      {isLoading && <Loading />}
    </div>
  )
})

export default Listdataeries
