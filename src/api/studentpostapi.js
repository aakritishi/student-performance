import axiosInstance from "./axios";

const studentPostApi = async (data) => {
  const token = localStorage.getItem("token");
  const response = await axiosInstance.post("students", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export default studentPostApi;
