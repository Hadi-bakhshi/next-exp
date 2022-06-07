import { Action, configureStore, combineReducers, ThunkAction, AnyAction } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import authReducer from "./authentication/authSlice";
import testReducer from "./test/testSlice";

const combinedReducer = combineReducers({
  auth: authReducer,
  test: testReducer,
})

const myReducer = (state , action:AnyAction) => {
  if(action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    }
    console.log(action.payload)
    return nextState;
  } else {
    return combinedReducer(state, action)
  }
}


export const makeStore = () => configureStore({
  reducer: myReducer
})

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk = ThunkAction<void, AppState, null, Action<string>>;
// export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;
export const wrapper = createWrapper<AppStore>(makeStore);
