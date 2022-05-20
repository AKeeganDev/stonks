import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const asyncStore = [
//   {
//     symbol: 'AAPL',
//     price: 149.35,
//     volume: 58175538,
//     misc: {
//       stonkName: 'Apple',
//       category: 'Technology',
//     },
//   },
//   {
//     symbol: 'FORD',
//     price: 1.4334,
//     volume: 22725,
//     misc: {
//       stonkName: 'Ford',
//       category: 'Automotive',
//     },
//   },
//   {
//     symbol: 'SBUX',
//     price: 73.8776,
//     volume: 8886812,
//     misc: {
//       stonkName: 'Starbucks',
//       category: 'Food Franchise',
//     },
//   },
// ];

const stonkSymbols = ['AAPL', 'FORD', 'SBUX'];

// export const getAppleData = createAsyncThunk('stonks/getData', async () => asyncStore);
export const getAppleData = createAsyncThunk('stonks/getData', async () => {
  const nameMap = {
    AAPL: {
      stonkName: 'Apple',
      category: 'Technology',
    },
    FORD: {
      stonkName: 'Ford',
      category: 'Automotive',
    },
    SBUX: {
      stonkName: 'Starbucks',
      category: 'Food Franchise',
    },
  };

  const allStonkSymbols = axios.all(stonkSymbols.map((stonk) => axios.get(`https://financialmodelingprep.com/api/v3/quote-short/${stonk}?apikey=d2195ea4d46715045182d4764d982039`).then((response) => ({ ...response.data[0], category: 'cars', misc: nameMap[{ ...response.data[0] }.symbol] }))));

  return allStonkSymbols;
});

const stonkSlice = createSlice({
  name: 'stonks',
  initialState: {
    stonks: [],
  },
  reducers: {
  },
  extraReducers: {
    [getAppleData.fulfilled]: (state, action) => {
      const appleData = action.payload;
      state.stonks = [...state.stonks, ...appleData];
    },
  },
});

export default stonkSlice.reducer;
