import {
  Action,
  configureStore,
  createSlice,
  ThunkAction,
} from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authSlice from "./authentication/authSlice";
import testSlice from "./test/testSlice";

export const subjectSlice = createSlice({
  name: "subject",
  initialState: {} as any,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("hydrate", action.payload);
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

const makeStore = () =>
  configureStore({
    reducer: {
      [subjectSlice.name]: subjectSlice.reducer,
      auth: authSlice,
      test: testSlice,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk = ThunkAction<void, AppState, null, Action<string>>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore);

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
