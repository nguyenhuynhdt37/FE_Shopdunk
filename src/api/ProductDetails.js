import api from '.'
export const getDataProduct = async () => {
  try {
    const data = await api.get('products/66dc440bfc904b00fe3814f4')
    return data.data
  } catch (e) {
    console.log(e)
    return null
  }
}

export const getDataProductAllOnHomePage = async () => {
  try {
    const response = await api.get(
      'products/category/product_all?pageNumber=1&pageSize=4'
    )
    return response.data // Trả về dữ liệu từ API
  } catch (e) {
    console.error('Error fetching product data:', e)
    return null // Trả về null nếu có lỗi
  }
}
