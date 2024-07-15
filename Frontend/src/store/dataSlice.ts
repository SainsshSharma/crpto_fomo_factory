import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface stockData {
  _id: string;
  name: string;
  rank: number;
  color: string;
  png: string;
  market: number;
  allTimeHighUSD: number;
  circulationSupply: number;
}

export interface DataState {
  data: stockData[];
}

const initialState: DataState = {
  data: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData(state, action: PayloadAction<stockData[]>) {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
