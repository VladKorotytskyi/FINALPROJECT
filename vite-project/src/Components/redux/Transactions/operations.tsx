import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { NewTransaction, Transaction } from "../Transactions/transactionsTypes";

axios.defaults.baseURL = "https://6abe92f2c4d5ac548302993b.mockapi.io";

const getErrorMessage = (e: unknown): string =>
  e instanceof Error ? e.message : "Unknown error";

export const fetchTransactions = createAsyncThunk<
  Transaction[],
  void,
  { rejectValue: string }
>("transactions/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get<Transaction[]>("/transactions");
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(getErrorMessage(e));
  }
});

export const addTransaction = createAsyncThunk<
  Transaction,
  NewTransaction,
  { rejectValue: string }
>("transactions/add", async (newTransaction, thunkAPI) => {
  try {
    const response = await axios.post<Transaction>(
      "/transactions",
      newTransaction
    );
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(getErrorMessage(e));
  }
});

export const deleteTransaction = createAsyncThunk<
  Transaction,
  string,
  { rejectValue: string }
>("transactions/delete", async (id, thunkAPI) => {
  try {
    const response = await axios.delete<Transaction>(`/transactions/${id}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(getErrorMessage(e));
  }
});

export const editTransaction = createAsyncThunk<
  Transaction,
  Transaction,
  { rejectValue: string }
>("transactions/edit", async (transaction, thunkAPI) => {
  try {
    const response = await axios.put<Transaction>(
      `/transactions/${transaction.id}`,
      transaction
    );
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(getErrorMessage(e));
  }
});