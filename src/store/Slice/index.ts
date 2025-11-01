import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const slice = createSlice({
    name: "list",
    initialState,
    reducers: {},
    // extraReducers: (builder) => {
    // builder.addCase(getList.fulfilled, (state, action) => {});
    // builder.addCase(getList.pending, (state, action) => {});
    // builder.addCase(getList.rejected, (state, action) => {});
    // },
});
// export const {} = slice.actions;

export default slice.reducer;
