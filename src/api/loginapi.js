import axiosInstance from './axios'

const loginApi = async (data) => {
    const response = await axiosInstance.post('admin/login', data);
  return (
    response.data
  )
}

export default loginApi