import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSwapi = createAsyncThunk("swapi/fetchSwapi", async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return await response.json();
});
const swapiSlice = createSlice({
  name: "swapi",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSwapi: (state) => {
      state.data = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSwapi.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSwapi.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSwapi.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { clearSwapi } = swapiSlice.actions;
export default swapiSlice.reducer;
