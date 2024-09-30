import { useQuery } from 'react-query'
import CategoryDetails from '../../Category/CategoryDetails'
import { getProductDetails } from '../../../api/ProductDetails'
import Loading from '../../Loading'
const Details = ({ id }) => {
  const { data, isLoading } = useQuery(
    ['get_info_productDetails', id],
    getProductDetails,
    { refetchOnWindowFocus: false }
  )
  return (
    <div>
      {data && <CategoryDetails data={data} />}
      {isLoading && <Loading />}
    </div>
  )
}

export default Details
