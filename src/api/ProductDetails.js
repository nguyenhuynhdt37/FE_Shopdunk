import api from '.'
export const getDataProduct = async ({ queryKey }) => {
  const [_key, id] = queryKey
  try {
    const data = await api.get(`products/${id}`)
    return data.data
  } catch (e) {
    console.log(e)
    return null
  }
}
export const getNavProduct = async ({ queryKey }) => {
  const [_key, id] = queryKey
  try {
    const data = await api.get(`products/${id}/navigation`)
    return data.data
  } catch (e) {
    console.log(e)
    return null
  }
}

export const getDataProductAllOnHomePage = async () => {
  try {
    const response = await api.get('category/all?pageNumber=1&pageSize=4')
    return response.data
  } catch (e) {
    console.error('Error fetching product data:', e)
    return null
  }
}

export const getProductDescription = async ({ queryKey }) => {
  const [_key, id] = queryKey
  try {
    const data = await api.get(`products/${id}/description`)
    return data.data
  } catch (e) {
    console.log(e)
    return null
  }
}
