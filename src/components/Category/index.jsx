import { useQuery } from 'react-query'
import CategorySelectors from './CategorySelectors'
import ListProduct from './ListProduct'
import { useCallback, useState } from 'react'
import { getAllProductById } from '../../api/Category'

const ListCategory = ({ data, categoryId }) => {
  const initPageSize = 1
  const [sort, setSort] = useState('')
  const [pageNumber] = useState(1)
  const [pageSize, setPageSize] = useState(initPageSize)
  const { data: objectProduct, refetch } = useQuery(
    ['get_product_by_cateogry', categoryId, pageNumber, pageSize, sort],
    getAllProductById,
    {
      refetchOnWindowFocus: false,
    }
  )
  const handleSort = useCallback((data) => {
    console.log('sort', data)
    setSort(data)
  }, [])
  const handlePageMore = async () => {
    setPageSize((prev) => prev + initPageSize)
    refetch()
  }
  return (
    <div className="text-2xl">
      {objectProduct && (
        <>
          <CategorySelectors data={data} sort={sort} onSort={handleSort} />
          <ListProduct data={objectProduct?.products ?? null} />
          {objectProduct?.totalPage !== 1 && (
            <button
              onClick={handlePageMore}
              className="px-52 rounded-xl hover:bg-[#4182c3] hover:text-white text-primary1 font-medium py-[1.45rem] bg-white"
            >
              Xem thêm
            </button>
          )}
        </>
      )}
    </div>
  )
}

export default ListCategory
