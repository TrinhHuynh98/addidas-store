import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../apiService/productApi";

export const getInitialProducts = createAsyncThunk(
  "product/initialData",
  async () => {
    try {
      const data = await getProducts();

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
