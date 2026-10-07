export type CategoryType = "expense" | "income";

export interface Category {
  id: string;
  name: string;
  icon: string;
  type: CategoryType;
}

export interface User {
  id: string;
  email: string;
  balance: number;
  categories: Category[];
}