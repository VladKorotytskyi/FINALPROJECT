import { useMemo } from "react";
import { useSelector } from "react-redux";
import type { JSX } from "react";
import { selectExpenses, selectIncomes } from "../redux/Transactions/selectors";
import { Box, Title, Row } from "./SummaryCard.styled";

const monthNames = [
  "СІЧЕНЬ",
  "ЛЮТИЙ",
  "БЕРЕЗЕНЬ",
  "КВІТЕНЬ",
  "ТРАВЕНЬ",
  "ЧЕРВЕНЬ",
  "ЛИПЕНЬ",
  "СЕРПЕНЬ",
  "ВЕРЕСЕНЬ",
  "ЖОВТЕНЬ",
  "ЛИСТОПАД",
  "ГРУДЕНЬ",
];

interface SummaryCardProps {
  type: "expense" | "income";
}

export function SummaryCard({ type }: SummaryCardProps): JSX.Element {
  const items = useSelector(type === "expense" ? selectExpenses : selectIncomes);

  const { totals, lastSixMonths } = useMemo(() => {
    const sums: Record<string, number> = {};

    items.forEach((item) => {
      const monthKey = item.date.slice(0, 7);
      sums[monthKey] = (sums[monthKey] ?? 0) + Number(item.amount);
    });

    const months = Object.keys(sums).sort().reverse().slice(0, 6);
    return { totals: sums, lastSixMonths: months };
  }, [items]);

  return (
    <Box>
      <Title>ЗВЕДЕННЯ</Title>

      {lastSixMonths.map((key) => {
        const monthNumber = Number(key.split("-")[1]);

        return (
          <Row key={key}>
            <span>{monthNames[monthNumber - 1]}</span>
            <span>
              {totals[key]
                .toLocaleString("uk-UA", { minimumFractionDigits: 2 })
                .replace(",", ".")}
            </span>
          </Row>
        );
      })}
    </Box>
  );
}