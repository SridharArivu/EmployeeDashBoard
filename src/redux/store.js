import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './dataSlice'; // Create this file

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
