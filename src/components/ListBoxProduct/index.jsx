import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ItemProduct from '../ItemProduct'
import { Link } from 'react-router-dom'

const ListBoxProduct = ({ data }) => {
  return (
    <div className="mt-4">
      <div
        style={{ fontSize: '3rem' }}
        className="title pt-7 font-bold text-center"
      >
        {data && data.name}
      </div>
      <div className="grid grid-cols-4 gap-7 mt-5">
        {data &&
          data.productSeries &&
          data.productSeries.map(
            (data) =>
              data &&
              data.products &&
              data.products[0] && (
                <ItemProduct data={data.products[0]} key={data.id} />
              )
          )}
      </div>
      <div className="more mt-10 justify-center flex">
        <Link to={`/category/${data.id}`}>
          <button
            type="button"
            className="border-primary1 rounded-2xl text-1.5xl border-1 flex items-center px-16 py-4 text-primary1 hover:bg-primary1 hover:text-white"
          >
            <span className="me-2">Xem tất cả iPhone</span>
            <FontAwesomeIcon
              style={{ fontSize: '1.6rem' }}
              icon={faAngleRight}
            />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ListBoxProduct
