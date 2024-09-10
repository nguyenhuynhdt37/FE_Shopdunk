import { useEffect, useState } from 'react'
import ListBoxProduct from '../../ListBoxProduct'
import { getDataProductAllOnHomePage } from '../../../api/ProductDetails'

const ListCategory = () => {
  const [products, setProducts] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchProductData = async () => {
      setIsLoading(true)
      const result = await getDataProductAllOnHomePage()
      if (result) {
        setProducts(result)
      } else {
        setError('Failed to fetch product data')
      }
      setIsLoading(false)
    }

    fetchProductData()
  }, [])
  return (
    <div className="list-box-products pt-5">
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <ListBoxProduct data={product} key={product} />
        ))}
    </div>
  )
}

export default ListCategory
