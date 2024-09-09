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
