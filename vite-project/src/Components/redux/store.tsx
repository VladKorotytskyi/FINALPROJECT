import { configureStore } from "@reduxjs/toolkit";
import { transactionsReducer } from "./Transactions/transactionsSlice";
import { usersReducer } from "./Users/usersSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
