import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const selectUsers = (state: RootState) => state.users.items;

export const selectIsLoading = (state: RootState) => state.users.isLoading;

export const selectError = (state: RootState) => state.users.error;

export const selectCurrentUser = createSelector([selectUsers], (users) => users[0] ?? null);

export const selectUserById = (id: string) =>
  createSelector([selectUsers], (users) => users.find((u) => u.id === id) ?? null);

export const selectBalance = createSelector(
  [selectCurrentUser],
  (user) => user?.balance ?? 0,
);

export const selectEmail = createSelector(
  [selectCurrentUser],
  (user) => user?.email ?? "",
);

export const selectCategories = createSelector(
  [selectCurrentUser],
  (user) => user?.categories ?? [],
);

export const selectExpenseCategories = createSelector(
  [selectCategories],
  (categories) => categories.filter((c) => c.type === "expense"),
);

export const selectIncomeCategories = createSelector(
  [selectCategories],
  (categories) => categories.filter((c) => c.type === "income"),
);