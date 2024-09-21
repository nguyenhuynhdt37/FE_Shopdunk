import api from '.'

export const getAllProductByProductSeriesID = async ({ queryKey }) => {
  const [_key, id, pageNumber, pageSize] = queryKey
  try {
    const data = await api.get(
      `product_series/${id}/products?pageNumber=${pageNumber}&pageSize=${pageSize}`
    )
    return data.data
  } catch (e) {
    console.log(e)
    return null
  }
}
export const getProductSeriesInfo = async ({ queryKey }) => {
  const [_key, id] = queryKey
  try {
    const data = await api.get(`product_series/${id}`)
    return data.data
  } catch (e) {
    console.log(e)
    return null
  }
}
