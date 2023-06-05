import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { AppSlice } from "./slices/AppSlice";
import { ProductSlice } from "./slices/ProductsSlice";

export const store = configureStore({
  reducer: {
    app: AppSlice.reducer,
    product: ProductSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
