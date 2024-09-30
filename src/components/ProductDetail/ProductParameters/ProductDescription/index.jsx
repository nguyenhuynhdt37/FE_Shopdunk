import { useQuery } from 'react-query'
import { getProductDescription } from '../../../../api/ProductDetails'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Loading from '../../../Loading'
const ProductDescription = ({ id, active }) => {
  const { data, isLoading } = useQuery(
    ['get_product_by_cateogry', id],
    getProductDescription,
    {
      refetchOnWindowFocus: false,
    }
  )

  return (
    <>
      {data && data.content && (
        <div className="product-description my-3">
          <div
            className={`markdown-body text-justify relative rounded-xl mt-10`}
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {data.content}
            </ReactMarkdown>
          </div>
          {isLoading && <Loading />}
        </div>
      )}
    </>
  )
}

export default ProductDescription
