import api from '.'

export const getProductSeries = async ({ queryKey }) => {
  const [_key, id] = queryKey
  try {
    const data = await api.get(`category/${id}/product_series`)
    return data.data
  } catch (e) {
    console.log(e)
    return null
  }
}
export const getAllProductById = async ({ queryKey }) => {
  const [_key, id, pageNumber, pageSize, sort] = queryKey
  console.log('sort3', sort)

  try {
    const data = await api.get(
      `category/${id}/product?pageNumber=${pageNumber}&pageSize=${pageSize}&sortOrder=${sort}`
    )
    return data.data
  } catch (e) {
    console.log(e)
    return null
  }
}
