import * as AxiosRequest from "../utils/request";

export const getProducts = async () => {
  try {
    const res = await AxiosRequest.GET("products");

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
