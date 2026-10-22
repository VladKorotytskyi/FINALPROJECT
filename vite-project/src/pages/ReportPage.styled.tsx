import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "../Components/Breakpoints";

export const Page = styled.div`
  min-height: calc(100vh - 60px);
  padding: 28px 40px;
  background: linear-gradient(180deg, #eef2fb 0, #eef2fb 340px, #ffffff 340px);
  font-family: "Roboto", sans-serif;

  @media ${device.tablet} {
    width: 634px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 40px;
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;

  @media ${device.tablet} {
    flex-wrap: wrap;
  }
`;

export const BackLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: #898686;
  text-decoration: none;

  svg {
    color: #ff751d;
  }

  &:hover {
    color: #e8731a;
  }
`;

export const Period = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: #898686;
`;

export const Switcher = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #000000;
`;

export const ArrowButton = styled.button`
  display: flex;
  border: none;
  background: transparent;
  color: #ff751d;
  cursor: pointer;
`;

export const SummaryBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-bottom: 20px;
  padding: 16px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
  font-size: 12px;
  font-weight: 700;

  @media ${device.mobile} {
    flex-direction: column;
    gap: 8px;
  }
`;

export const ExpenseSum = styled.span`
  margin-left: 10px;
  color: #d9534f;
`;

export const IncomeSum = styled.span`
  margin-left: 10px;
  color: #2e9e5b;
`;

export const Card = styled.div`
  margin-bottom: 20px;
  padding: 24px 20px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);

  @media ${device.tablet} {
    padding: 20px 12px;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px 36px;
  margin-top: 24px;

  @media ${device.mobile} {
    gap: 16px 12px;
  }
`;

export const CategoryButton = styled.button<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 90px;
  border: none;
  background: transparent;
  font-size: 9px;
  text-transform: uppercase;
  text-align: center;
  color: #555555;
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: ${({ $active }) => ($active ? "#ffe3cf" : "#f3f5fa")};
    color: ${({ $active }) => ($active ? "#ff751d" : "#1f2a5a")};
    font-size: 24px;
  }
`;

export const ChartCard = styled.div`
  height: 320px;
  padding: 24px 32px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);

  @media ${device.tablet} {
    padding: 16px 8px;
  }
`;

export const EmptyText = styled.p`
  margin: 0;
  padding-top: 120px;
  text-align: center;
  font-size: 12px;
  color: #898686;
`;