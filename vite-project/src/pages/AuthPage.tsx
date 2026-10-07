import { useEffect, useState } from "react";
import type { ChangeEvent, JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdBarChart } from "react-icons/md";
import { MainForm } from "../Components/MainForm/MainForm";
import type { AppDispatch } from "../Components/redux/store";
import {
  fetchUser,
  updateBalance,
} from "../Components/redux/Users/operations";
import { selectBalance } from "../Components/redux/Users/selectors";
import {
  Page,
  TopBar,
  BalanceLabel,
  BalanceInput,
  ConfirmButton,
  ReportLink,
  Tabs,
  Tab,
} from "./AuthPage.styled";

export function AuthPage(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const balance = useSelector(selectBalance);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    dispatch(fetchUser(["1"]));
  }, [dispatch]);

  useEffect(() => {
    setValue(String(balance));
  }, [balance]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const handleConfirm = (): void => {
    const newBalance = Number(value);
    if (Number.isNaN(newBalance)) return;
    dispatch(updateBalance({ id: "1", balance: newBalance }));
  };

  return (
    <Page>
      <TopBar>
        <BalanceLabel>Баланс:</BalanceLabel>
        <BalanceInput
          type="number"
          value={value}
          onChange={handleChange}
        />
        <ConfirmButton onClick={handleConfirm}>ПІДТВЕРДИТИ</ConfirmButton>

        <ReportLink to="/report">
          Перейти до розрахунків
          <MdBarChart size={18} color="#333" />
        </ReportLink>
      </TopBar>

      <Tabs>
        <Tab to="/main">Витрати</Tab>
        <Tab to="/transactions">Дохід</Tab>
      </Tabs>

      <MainForm />
    </Page>
  );
}