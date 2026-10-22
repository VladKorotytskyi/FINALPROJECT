import { useEffect, useMemo } from "react";
import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReportChart } from "../Components/ReportChart/ReportChart";
import type { AppDispatch } from "../Components/redux/store";
import { fetchTransactions } from "../Components/redux/Transactions/operations";
import { selectIncomes } from "../Components/redux/Transactions/selectors";

export function IncomeReportPage(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const incomes = useSelector(selectIncomes);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const chartItems = useMemo(() => {
    const sums: Record<string, number> = {};

    incomes.forEach((item) => {
      sums[item.category] = (sums[item.category] ?? 0) + Number(item.amount);
    });

    return Object.entries(sums)
      .map(([label, total]) => ({ label, total }))
      .sort((a, b) => b.total - a.total);
  }, [incomes]);

  return <ReportChart items={chartItems} />;
}