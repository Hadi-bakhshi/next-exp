import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import http from "../../services/axiosConfig/interceptors";
import config from "../../services/config";

import { AuthState, LoginData, User } from "../../types/redux/index";
import { RootState } from "../store";

export const initialState: AuthState = Object.freeze({
  isAuthenticated: false,
  error: "",
  status: "idle",
  user: {},
});

export const logIn = createAsyncThunk(
  "auth/logIn",
  async ({ username, password }: LoginData, thunkAPI) => {
    try {
      const url = config.endpoints.auth.login;
      const { data } = await http.post(url, { username, password });
      return data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data.message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthError: (state: typeof initialState) => {
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logIn.pending, (state) => {
        state.status = "pending";
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.isAuthenticated = true;
        state.status = "resolved";
        state.user = payload as User;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.error = payload as string;
        state.isAuthenticated = false;
        state.status = "resolved";
      });
  },
});

export const { clearAuthError } = authSlice.actions;
export default authSlice.reducer;
export const authState = (state: RootState) => state.auth;
