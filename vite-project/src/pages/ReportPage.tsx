import { useEffect, useMemo, useState } from "react";
import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Balance } from "../Components/Balance/Balance";
import { ReportChart } from "../Components/ReportChart/ReportChart";
import { getCategoryIcon } from "../Components/CategoryIcons/CategoryIcons";
import type { AppDispatch } from "../Components/redux/store";
import { fetchTransactions } from "../Components/redux/Transactions/operations";
import { selectTransactions } from "../Components/redux/Transactions/selectors";
import {
  selectExpenseCategories,
  selectIncomeCategories,
} from "../Components/redux/Users/selectors";
import {
  Page,
  TopBar,
  BackLink,
  Period,
  Switcher,
  ArrowButton,
  SummaryBar,
  ExpenseSum,
  IncomeSum,
  Card,
  CategoryList,
  CategoryButton,
  ChartCard,
  EmptyText,
} from "./ReportPage.styled";

const formatMoney = (value: number): string =>
  value.toLocaleString("uk-UA", { minimumFractionDigits: 2 }).replace(",", ".");

export function ReportPage(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { type: typeParam } = useParams<{ type?: string }>();

  const transactions = useSelector(selectTransactions);
  const expenseCategories = useSelector(selectExpenseCategories);
  const incomeCategories = useSelector(selectIncomeCategories);

  const [month, setMonth] = useState<Date>(new Date());
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const type = typeParam === "income" ? "income" : "expense";

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  useEffect(() => {
    setSelectedCategory("");
  }, [type]);

  if (typeParam !== "expenses" && typeParam !== "income") {
    return <Navigate to="/report/expenses" replace />;
  }

  const monthKey = `${month.getFullYear()}-${String(month.getMonth() + 1).padStart(2, "0")}`;
  const monthName = month
    .toLocaleDateString("uk-UA", { month: "long" })
    .toUpperCase();

  const monthTransactions = useMemo(
    () => transactions.filter((item) => item.date.startsWith(monthKey)),
    [transactions, monthKey]
  );

  const totalExpense = useMemo(
    () =>
      monthTransactions
        .filter((item) => item.type === "expense")
        .reduce((sum, item) => sum + Number(item.amount), 0),
    [monthTransactions]
  );

  const totalIncome = useMemo(
    () =>
      monthTransactions
        .filter((item) => item.type === "income")
        .reduce((sum, item) => sum + Number(item.amount), 0),
    [monthTransactions]
  );

  const typeTransactions = useMemo(
    () => monthTransactions.filter((item) => item.type === type),
    [monthTransactions, type]
  );

  const categories = type === "expense" ? expenseCategories : incomeCategories;
  const activeCategory = selectedCategory || categories[0]?.name || "";

  const getCategoryTotal = (name: string): number =>
    typeTransactions
      .filter((item) => item.category === name)
      .reduce((sum, item) => sum + Number(item.amount), 0);

  const chartItems = useMemo(() => {
    const sums: Record<string, number> = {};

    typeTransactions
      .filter((item) => item.category === activeCategory)
      .forEach((item) => {
        sums[item.description] =
          (sums[item.description] ?? 0) + Number(item.amount);
      });

    return Object.entries(sums)
      .map(([label, total]) => ({ label, total }))
      .sort((a, b) => b.total - a.total);
  }, [typeTransactions, activeCategory]);

  const changeMonth = (step: number): void => {
    setMonth(new Date(month.getFullYear(), month.getMonth() + step, 1));
  };

  const changeType = (): void => {
    navigate(type === "expense" ? "/report/income" : "/report/expenses");
  };

  return (
    <Page>
      <TopBar>
        <BackLink to="/main">
          <FaArrowLeft />
          Повернутись на головну
        </BackLink>

        <Balance />

        <Period>
          Поточний період
          <Switcher>
            <ArrowButton type="button" onClick={() => changeMonth(-1)}>
              <FaChevronLeft size={10} />
            </ArrowButton>
            <span>
              {monthName}
              <br />
              {month.getFullYear()}
            </span>
            <ArrowButton type="button" onClick={() => changeMonth(1)}>
              <FaChevronRight size={10} />
            </ArrowButton>
          </Switcher>
        </Period>
      </TopBar>

      <SummaryBar>
        <span>
          Витрати: <ExpenseSum>{formatMoney(totalExpense)} грн.</ExpenseSum>
        </span>
        <span>
          Доходи: <IncomeSum>+ {formatMoney(totalIncome)} грн.</IncomeSum>
        </span>
      </SummaryBar>

      <Card>
        <Switcher style={{ justifyContent: "center" }}>
          <ArrowButton type="button" onClick={changeType}>
            <FaChevronLeft size={10} />
          </ArrowButton>
          <span>{type === "expense" ? "Витрати" : "Доходи"}</span>
          <ArrowButton type="button" onClick={changeType}>
            <FaChevronRight size={10} />
          </ArrowButton>
        </Switcher>

        <CategoryList>
          {categories.map((category) => {
            const Icon = getCategoryIcon(category.icon);

            return (
              <CategoryButton
                key={category.id}
                type="button"
                $active={category.name === activeCategory}
                onClick={() => setSelectedCategory(category.name)}
              >
                <span>{formatMoney(getCategoryTotal(category.name))}</span>
                <div>
                  <Icon />
                </div>
                {category.name}
              </CategoryButton>
            );
          })}
        </CategoryList>
      </Card>

      <ChartCard>
        {chartItems.length > 0 ? (
          <ReportChart items={chartItems} />
        ) : (
          <EmptyText>Немає даних за цей період</EmptyText>
        )}
      </ChartCard>
    </Page>
  );
}