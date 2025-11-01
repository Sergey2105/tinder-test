import { type Action, combineReducers } from "redux";
import { type ThunkAction, configureStore } from "@reduxjs/toolkit";
import slice from "./Slice";

const rootReducer = combineReducers({
    slice: slice,
});

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const store = makeStore();
