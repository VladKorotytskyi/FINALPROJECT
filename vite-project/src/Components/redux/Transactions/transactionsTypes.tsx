export type TransactionType = "expense" | "income";

export interface Transaction {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: TransactionType;
  userId: string;
}

export type NewTransaction = Omit<Transaction, "id" | "userId">;