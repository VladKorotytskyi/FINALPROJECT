import type { JSX } from "react";
import { MainForm } from "../Components/MainForm/MainForm";
import * as S from "./AuthPage.styled";

export function TransactionsPage(): JSX.Element {
  return (
    <S.Page>
      <S.TopBar>
        <S.BalanceLabel>Баланс:</S.BalanceLabel>
        <S.BalanceBox>ApiBalance UAH</S.BalanceBox>
        <S.ConfirmButton>ПІДТВЕРДИТИ</S.ConfirmButton>

        <S.ReportLink to="/report">Перейти до розрахунків</S.ReportLink>
      </S.TopBar>

      <S.Tabs>
        <S.Tab to="/main">Витрати</S.Tab>
        <S.Tab to="/transactions">Дохід</S.Tab>
      </S.Tabs>

      <MainForm />
    </S.Page>
  );
}
