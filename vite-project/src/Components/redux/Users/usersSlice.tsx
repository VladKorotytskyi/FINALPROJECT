import { createSlice } from "@reduxjs/toolkit";
import {
  fetchUser,
  updateBalance,
  addCategory,
  deleteCategory,
  editCategory,
} from "./operations";
import type { User } from "./usersTypes";

interface UserState {
  items: User[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  items: [],
  isLoading: false,
  error: null,
};

const replaceUser = (state: UserState, updated: User): void => {
  const index = state.items.findIndex((u) => u.id === updated.id);
  if (index !== -1) state.items[index] = updated;
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Unknown error";
      })

      .addCase(updateBalance.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateBalance.fulfilled, (state, action) => {
        state.isLoading = false;
        replaceUser(state, action.payload);
      })
      .addCase(updateBalance.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Unknown error";
      })

      .addCase(addCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        replaceUser(state, action.payload);
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Unknown error";
      })

      .addCase(deleteCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        replaceUser(state, action.payload);
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Unknown error";
      })

      .addCase(editCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        replaceUser(state, action.payload);
      })
      .addCase(editCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ?? "Unknown error";
      });
  },
});

export const usersReducer = usersSlice.reducer;