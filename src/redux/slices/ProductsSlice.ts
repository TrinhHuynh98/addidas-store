import { createSlice } from "@reduxjs/toolkit";
import { ProductInitialState } from "../../utils/Types";
import { getInitialProducts } from "../reducers/getInitialProducts";

const initialState: ProductInitialState = {
  allProducts: undefined,
  currentProduct: undefined,
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getInitialProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
    });
  },
});

export const { setCurrentProduct } = ProductSlice.actions;
