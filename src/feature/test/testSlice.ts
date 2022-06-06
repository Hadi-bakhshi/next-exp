import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import http from "../../services/axiosConfig/interceptors";
import config from "../../services/config";

import { RootState } from "../store";

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
    addPost: (state: typeof initialState, action:any) => {
        state.body = action.payload.body;
        state.title = action.payload.title


    },
  },
  extraReducers: {}
});

export const { addPost } = testSlice.actions;
export default testSlice.reducer;
export const testState = (state: RootState) => state.test;
