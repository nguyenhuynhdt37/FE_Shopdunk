import { Link } from 'react-router-dom/dist'
import './CategorySelectors.scss'
import { memo, useState } from 'react'
const CategorySelectors = memo(({ data, sort, onSort }) => {
  const [sortOption, setsortOption] = useState(sort)
  const handleSortChange = (e) => {
    const sort = e.target.value
    console.log('sort', sort)

    onSort(sort)
    setsortOption(sort)
  }
  console.log('>>dataseries', data)

  return (
    <div className="grid grid-cols-5 gap-20 text-2xl">
      <div className="col-span-4">
        <ul className="flex overflow-x-scroll scrollbar-custom pb-6">
          <li className="pr-10 pb-7 flex-shrink-0">
            <Link
              to="/"
              className=" px-3 pb-4 font-semibold text-primary1 border-0 border-b-2 border-b-primary1"
            >
              Tất Cả
            </Link>
          </li>
          {data &&
            data.map((seri) => (
              <li className="pr-10 pb-7 flex-shrink-0" key={seri.id}>
                <Link
                  to={`/product_series/${seri.id}`}
                  className=" px-3 pb-4 hover:text-primary1 border-0 hover:border-b-2 hover:border-b-primary1"
                >
                  {seri?.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="box relative">
        <div className="button border rounded-xl bg-white items-center px-5 flex justify-start">
          <img
            src="https://shopdunk.com/images//uploaded-source/icon//comparison.png"
            className="w-11 mr-3"
          />

          <select
            className="border-none py-5 rounded-lg focus:outline-none"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="">Sắp xếp sản phẩm</option>
            <option value="asc">Giá tăng dần</option>
            <option value="desc">Giá giảm dần</option>
          </select>
        </div>
      </div>
    </div>
  )
})

export default CategorySelectors
