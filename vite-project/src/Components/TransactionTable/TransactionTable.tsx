import { useEffect, useMemo } from "react";
import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegTrashAlt } from "react-icons/fa";
import type { AppDispatch } from "../redux/store";
import {
  fetchTransactions,
  deleteTransaction,
} from "../redux/Transactions/operations";
import {
  selectExpenses,
  selectIncomes,
} from "../redux/Transactions/selectors";
import { Head, Body, Row, Amount, DeleteButton } from "./TransactionTable.styled";

interface TransactionTableProps {
  type: "expense" | "income";
}

export function TransactionTable({ type }: TransactionTableProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const transactions = useSelector(
    type === "expense" ? selectExpenses : selectIncomes
  );

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const sortedTransactions = useMemo(
    () => [...transactions].sort((a, b) => b.date.localeCompare(a.date)),
    [transactions]
  );

  const sign = type === "expense" ? "-" : "+";

  return (
    <div>
      <Head>
        <span>ДАТА</span>
        <span>ОПИС</span>
        <span>КАТЕГОРІЯ</span>
        <span>СУМА</span>
        <span />
      </Head>
      <Body>
        {sortedTransactions.map((transaction) => (
          <Row key={transaction.id}>
            <span>{new Date(transaction.date).toLocaleDateString("uk-UA")}</span>
            <span>{transaction.description}</span>
            <span>{transaction.category}</span>
            <Amount $type={type}>
              {sign} {Number(transaction.amount).toFixed(2)} грн.
            </Amount>
            <DeleteButton
              type="button"
              onClick={() => dispatch(deleteTransaction(transaction.id))}
            >
              <FaRegTrashAlt size={10} />
            </DeleteButton>
          </Row>
        ))}
      </Body>
    </div>
  );
}