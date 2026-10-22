import { useEffect, useMemo } from "react";
import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReportChart } from "../Components/ReportChart/ReportChart";
import type { AppDispatch } from "../Components/redux/store";
import { fetchTransactions } from "../Components/redux/Transactions/operations";
import { selectExpenses } from "../Components/redux/Transactions/selectors";

export function ExpensesReportPage(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const expenses = useSelector(selectExpenses);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const chartItems = useMemo(() => {
    const sums: Record<string, number> = {};

    expenses.forEach((item) => {
      sums[item.category] = (sums[item.category] ?? 0) + Number(item.amount);
    });

    return Object.entries(sums)
      .map(([label, total]) => ({ label, total }))
      .sort((a, b) => b.total - a.total);
  }, [expenses]);

  return <ReportChart items={chartItems} />;
}