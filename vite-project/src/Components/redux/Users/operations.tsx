import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Category, User } from "../Users/usersTypes";

axios.defaults.baseURL = "https://6abe92f2c4d5ac548302993b.mockapi.io";

const getErrorMessage = (e: unknown): string =>
  e instanceof Error ? e.message : "Unknown error";

export const fetchUser = createAsyncThunk<
  User[],
  string[],
  { rejectValue: string }
>("users/fetch", async (ids, thunkAPI) => {
  try {
    const responses = await Promise.all(
      ids.map((id) => axios.get<User>(`/users/${id}`)),
    );
    return responses.map((r) => r.data);
  } catch (e) {
    return thunkAPI.rejectWithValue(getErrorMessage(e));
  }
});

export const updateBalance = createAsyncThunk<
  User,
  { id: string; balance: number },
  { rejectValue: string }
>("users/updateBalance", async (updateData, thunkAPI) => {
  try {
    const response = await axios.put<User>(`/users/${updateData.id}`, {
      balance: updateData.balance,
    });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(getErrorMessage(e));
  }
});

export const addCategory = createAsyncThunk<
  User,
  { userId: string; category: Omit<Category, "id"> },
  { rejectValue: string }
>("users/addCategory", async ({ userId, category }, thunkAPI) => {
  try {
    const { data: user } = await axios.get<User>(`/users/${userId}`);
    const newCategory: Category = { ...category, id: `cat_${Date.now()}` };
    const response = await axios.put<User>(`/users/${userId}`, {
      ...user,
      categories: [...user.categories, newCategory],
    });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(getErrorMessage(e));
  }
});

export const deleteCategory = createAsyncThunk<
  User,
  { userId: string; categoryId: string },
  { rejectValue: string }
>("users/deleteCategory", async ({ userId, categoryId }, thunkAPI) => {
  try {
    const { data: user } = await axios.get<User>(`/users/${userId}`);
    const response = await axios.put<User>(`/users/${userId}`, {
      ...user,
      categories: user.categories.filter((c) => c.id !== categoryId),
    });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(getErrorMessage(e));
  }
});

export const editCategory = createAsyncThunk<
  User,
  { userId: string; category: Category },
  { rejectValue: string }
>("users/editCategory", async ({ userId, category }, thunkAPI) => {
  try {
    const { data: user } = await axios.get<User>(`/users/${userId}`);
    const response = await axios.put<User>(`/users/${userId}`, {
      ...user,
      categories: user.categories.map((c) =>
        c.id === category.id ? category : c,
      ),
    });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(getErrorMessage(e));
  }
});