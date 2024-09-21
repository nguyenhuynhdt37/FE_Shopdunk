import ListBoxProduct from '../../ListBoxProduct'
import { getDataProductAllOnHomePage } from '../../../api/ProductDetails'
import { useQuery } from 'react-query'

const ListCategory = () => {
  const { data, isLoading, error } = useQuery(
    'dataCategory',
    getDataProductAllOnHomePage,
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    }
  )

  return (
    <div className="list-box-products pt-5 ">
      {data &&
        data.length > 0 &&
        data.map(
          (category) =>
            category &&
            category.productSeries[0] &&
            category.productSeries[0].products.length > 0 && (
              <ListBoxProduct data={category} key={category.id} />
            )
        )}
    </div>
  )
}

export default ListCategory
