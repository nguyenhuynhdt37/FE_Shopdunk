import { RxCaretRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const PageNavigation = ({ data }) => {
  console.log('nav', data)

  return (
    <div className="text-[1.45rem]  text-gray-800 bg-white">
      <ul className="list-url flex py-5 container mx-auto">
        <li className="url mr-2 flex items-center ">
          <Link to="/">Trang chủ</Link>
          <RxCaretRight className="w-10 ms-2" />
        </li>
        {data &&
          data.name &&
          Array.isArray(data.productSeries) &&
          data?.productSeries?.length > 0 && (
            <li className="url flex items-center">
              <Link to={`/category/${data.id}`}>{data.name}</Link>
            </li>
          )}
        {data && data.name && data.category && data.category.id && (
          <li className="url flex items-center">
            <Link to={`/category/${data.category.id}`}>
              {data.category.name}
            </Link>
            <RxCaretRight className="w-10 ms-2" />
          </li>
        )}
        {data && data.productSeri && data.productSeri.category && (
          <li className="url  flex items-center">
            <Link to={`/category/${data.productSeri.category.name}`}>
              {data.productSeri.category.name}
            </Link>
            <RxCaretRight className="w-10 ms-2" />
          </li>
        )}
        {data && data.productSeri && (
          <li className="url  flex items-center">
            <Link to={`/series/${data.productSeri.id}`}>
              {data.productSeri.name}
            </Link>
            <RxCaretRight className="w-10 ms-2" />
          </li>
        )}
        {data &&
          !Array.isArray(data.productSeri) &&
          data.productSeri?.category && (
            <li className="url  flex items-center">
              <Link to={`/product/${data.id}`}>{data.name}</Link>
            </li>
          )}
        {data && !Array.isArray(data.name) && data.category && (
          <li className="url  flex items-center">
            <Link to={`/product/${data.id}`}>{data.name}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default PageNavigation
