import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
