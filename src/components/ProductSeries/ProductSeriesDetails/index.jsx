import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { useState } from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa6'

const ProductSeriesDetails = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldShowToggle = data?.content.length > 600

  return (
    <>
      {data && data.content && (
        <div className="markdown-body text-justify relative rounded-xl mt-10 bg-white">
          <div className={isExpanded ? '' : 'fade'}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {isExpanded ? data.content : `${data.content.substring(0, 600)}`}
            </ReactMarkdown>
            {!isExpanded && (
              <div className="ligature left-0 right-0 bottom-[3.5rem] h-28 bg-[#fff] opacity-35 absolute"></div>
            )}
          </div>
          {shouldShowToggle && (
            <div className="flex justify-center">
              {isExpanded ? (
                <button
                  className="flex items-center text-1.5xl text-primary1"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  Thu gọn
                  <FaAngleUp className="ms-2 text-xl" />
                </button>
              ) : (
                <button
                  className="flex items-center text-1.5xl text-primary1"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  Tìm hiểu thêm
                  <FaAngleDown className="ms-2 text-xl" />
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default ProductSeriesDetails
