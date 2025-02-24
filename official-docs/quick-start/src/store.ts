import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter-slice';

export const store = configureStore({
    reducer: {
      counter: counterReducer,
    }
  });

  export type RootState = ReturnType<typeof store.getState>
  export type AppStore = typeof store;
  export type AppDispatch = typeof store.dispatch;