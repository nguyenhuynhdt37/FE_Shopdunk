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
    <div className="list-box-products pt-5">
      {data &&
        data.length > 0 &&
        data.map((product) => (
          <ListBoxProduct data={product} key={product.categoryId} />
        ))}
    </div>
  )
}

export default ListCategory
