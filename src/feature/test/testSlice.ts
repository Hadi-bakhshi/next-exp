import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import http from "../../services/axiosConfig/interceptors";
import config from "../../services/config";

import { AppState } from "../store";

interface TestState {
  id: number;
  title: string;
  body: string;
}

export const initialState: TestState = {
  id: 1,
  title: "",
  body: "",
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    addPost: (state: typeof initialState, action: any) => {
      state.id = action.payload.id;
      state.body = action.payload.body;
      state.title = action.payload.title;
    },
    addPost2: (state: typeof initialState, action: any) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
    },
  },
  extraReducers: {},
});

export const { addPost, addPost2 } = testSlice.actions;
export default testSlice.reducer;
export const testState = (state: AppState) => state.test;
