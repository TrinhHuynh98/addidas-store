import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://fakestoreapiserver.reactbd.com/",
});

export const GET = async (path: string) => {
  const response = await axiosInstance.get(path);
  return response;
};

export default axiosInstance;
