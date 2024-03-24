import { createSlice } from "@reduxjs/toolkit";
import { fetchTrailers } from "./operations";

const handlePending = (state) => {
  state.isLoading = false;
  state.isLoading = true;
};
const handleError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const trailersSlice = createSlice({
  name: "trailers",
  initialState: {
    items: [],
    favorite: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrailers.pending, handlePending)
      .addCase(fetchTrailers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTrailers.rejected, handleError);
  },
});