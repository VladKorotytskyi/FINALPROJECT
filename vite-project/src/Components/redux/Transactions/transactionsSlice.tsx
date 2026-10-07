import { createSlice } from "@reduxjs/toolkit";
import type { Transaction } from "../Transactions/transactionsTypes";
import {
  fetchTransactions,
  addTransaction,
  deleteTransaction,
  editTransaction,
} from "./operations";

interface TransactionsState {
  items: Transaction[];
  isLoading: boolean;
  error: string | null;
}

const initialState: TransactionsState = {
  items: [],
  isLoading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Unknown error";
      })

      .addCase(addTransaction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Unknown error";
      })

      .addCase(deleteTransaction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter((t) => t.id !== action.payload.id);
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Unknown error";
      })

      .addCase(editTransaction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(editTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export const transactionsReducer = transactionsSlice.reducer;