import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

const asyncStore = [
  {
    symbol: 'AAPL',
    price: 149.35,
    volume: 58175538,
    misc: {
      stonkName: 'Apple',
      category: 'tech',
    },
  },
  {
    symbol: 'FORD',
    price: 1.4334,
    volume: 22725,
    misc: {
      stonkName: 'Ford',
      category: 'Automotive',
    },
  },
  {
    symbol: 'SBUX',
    price: 73.8776,
    volume: 8886812,
    misc: {
      stonkName: 'Starbux',
      category: 'Food Franchise',
    },
  },
];

// const urlEndpoint = 'https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=d2195ea4d46715045182d4764d982039';

// const appleStonkReturn = [{
//   symbol: 'AAPL',
//   price: 120.96000000,
//   volume: 332607163,
// }];

// const netflixStonkReturn = [{
//   symbol: 'NFLX',
//   price: 186.51,
//   volume: 16145011,
// }];

// const nvidiaStonkReturn = [{
//   symbol: 'NVDA',
//   price: 186.51,
//   volume: 16145011,
// }];

// const stonkSymbols = ['AAPL', 'FORD', 'SBUX'];

// const fordStonkReturn = [{
//   symbol: "FORD",
//   price: 1.39,
//   volume: 67915,
//   }];

// const volksWagenStonkReturn = [{
//   symbol: "VWAGY",
//   price: 19.89,
//   volume: 423601,
//   }];

// const volksWagenStonkReturn = [{
//   symbol: "NSANY",
//   price: 7.688,
//   volume: 74058,
//   }];

// tech: to get Apple, netflix, Nvidia
// cars: Ford, Tesla, chrysler
// ispCompanies:

export const getAppleData = createAsyncThunk('stonks/getData', async () => asyncStore);
// const response = await axios(urlEndpoint);
// return response.data;
// const nameMap = {
//   AAPL: {
//     stonkName: 'Apple',
//     catgory: 'tech',
//   },
//   FORD: {
//     stonkName: 'Ford',
//     category: 'Automotive',
//   },
//   SBUX: {
//     stonkName: 'Starbucks',
//     category: 'Food Franchise',
//   },
// };

// const allStonkSymbols = axios.all(stonkSymbols.map((stonk) => axios.get(`https://financialmodelingprep.com/api/v3/quote-short/${stonk}?apikey=d2195ea4d46715045182d4764d982039`).then((response) => ({ ...response.data[0], category: 'cars', misc: nameMap[{ ...response.data[0] }.symbol] }))));

// return allStonkSymbols;

// array of promises
// promises.all[].then(=>)

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
// export const stonkSliceActions = stonkSlice.actions;

export default stonkSlice.reducer;
