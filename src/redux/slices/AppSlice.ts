import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppInitialState } from "../../utils/Types";

const initialState: AppInitialState = {
  toast: [],
  userInfo: undefined,
  isLoading: false,
};

export const AppSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = AppSlice.actions;
