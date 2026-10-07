import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const selectTransactions = (state: RootState) =>
  state.transactions.items;

export const selectIsLoading = (state: RootState) =>
  state.transactions.isLoading;

export const selectError = (state: RootState) => state.transactions.error;

export const selectExpenses = createSelector([selectTransactions], (items) =>
  items.filter((t) => t.type === "expense")
);

export const selectIncomes = createSelector([selectTransactions], (items) =>
  items.filter((t) => t.type === "income")
);

export const selectTotalExpenses = createSelector([selectExpenses], (items) =>
  items.reduce((sum, t) => sum + t.amount, 0)
);

export const selectTotalIncomes = createSelector([selectIncomes], (items) =>
  items.reduce((sum, t) => sum + t.amount, 0)
);

export const selectBalance = createSelector(
  [selectTotalIncomes, selectTotalExpenses],
  (income, expenses) => income - expenses
);