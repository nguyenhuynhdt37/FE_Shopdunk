import { useQuery } from 'react-query'
import { getProductSpecifications } from '../../../../api/ProductDetails'
import React from 'react'
import Loading from '../../../Loading'
const replaceNewlinesWithBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      <br />
    </React.Fragment>
  ))
}
const DescriptionParameter = ({ id }) => {
  const { data, isLoading } = useQuery(
    ['get_product_specifications', id],
    getProductSpecifications,
    { refetchOnWindowFocus: false }
  )
  return (
    <div className="row-table text-center px-20 mb-40">
      <table className="w-full">
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 && ' bg-zinc-100'
                } text-left  rounded-xl px-6 py-4.5  w-full grid grid-cols-2 gap-0 items-center`}
              >
                <td className="font-bold text-zinc-700">
                  {item?.attributeName}
                </td>
                <td className="leading-10">
                  {replaceNewlinesWithBreaks(item?.attributeValue)}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {isLoading && <Loading />}
    </div>
  )
}

export default DescriptionParameter
