import axiosInstance from "./axios";

const studentPostApi = async (data)=>{
    const response = await axiosInstance.post('student');
    return (
        response.data
    )
}