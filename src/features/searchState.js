import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search-state",
  initialState: {
    value: false,
    input: "",
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
    hide: (state) => {
      state.value = false;
    },
    show: (state) => {
      state.value = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { hide, show, setInput } = searchSlice.actions;

export default searchSlice.reducer;
