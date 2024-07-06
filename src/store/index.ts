import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './slices/contact';

const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
});

// Define the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;