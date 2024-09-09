import api from './'
export const login = async (uselogin) => {
  try {
    const res = await api.post('users/login', uselogin)
    return { data: res.data, error: null } // Trả về dữ liệu và không có lỗi
  } catch (error) {
    // Trả về thông tin lỗi
    return { data: null, error }
  }
}

export const registerApi = async (data) => {
  try {
    const res = await api.post('users/register', data)
    return { data: res.data, error: null }
  } catch (e) {
    return { data: null, error: e }
  }
}
