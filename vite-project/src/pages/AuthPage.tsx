import type { JSX } from "react";
import { MdBarChart } from "react-icons/md";
import { Balance } from "../Components/Balance/Balance";
import { MainForm } from "../Components/MainForm/MainForm";
import { TransactionTable } from "../Components/TransactionTable/TransactionTable";
import { SummaryCard } from "../Components/SummaryCard/SummaryCard";
import {
  Page,
  TopBar,
  ReportLink,
  Tabs,
  Tab,
  MainContainer,
  BottomSection,
} from "./AuthPage.styled";

export function AuthPage(): JSX.Element {
  return (
    <Page>
      <TopBar>
        <Balance />
        <ReportLink to="/report">
          Перейти до розрахунків
          <MdBarChart size={18} color="#333" />
        </ReportLink>
      </TopBar>

      <Tabs>
        <Tab to="/main">Витрати</Tab>
        <Tab to="/transactions">Дохід</Tab>
      </Tabs>

      <MainContainer>
        <MainForm type="expense" />
        <BottomSection>
          <TransactionTable type="expense" />
          <SummaryCard type="expense" />
        </BottomSection>
      </MainContainer>
    </Page>
  );
}