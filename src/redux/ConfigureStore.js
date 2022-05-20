import { configureStore } from '@reduxjs/toolkit';
import stonksReducer from './stonks/stonkAPI';

const store = configureStore({
  reducer: {
    stonks: stonksReducer,
  },
});

export default store;
