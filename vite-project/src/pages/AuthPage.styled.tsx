import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Page = styled.div`
  min-height: calc(100vh - 60px);
  padding: 28px 40px;
  background: linear-gradient(180deg, #eef2fb 0%, #ffffff 100%);
  font-family: "Roboto", sans-serif;
`;

export const TopBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const BalanceLabel = styled.span`
  font-size: 11px;
  color: #898686;
`;

export const BalanceBox = styled.div`
  padding: 10px 22px;
  border: 1px solid #d9deea;
  border-radius: 20px;
  background: #ffffff;
  font-size: 11px;
  font-weight: 700;
  color: #010101;
`;

export const ConfirmButton = styled.button`
  padding: 10px 22px;
  border: 1px solid #dfe3ee;
  border-radius: 20px;
  background: transparent;
  font-size: 11px;
  color: #a3a3a3;
  cursor: pointer;

  &:hover {
    color: #e8731a;
    border-color: #e8731a;
  }
`;

export const ReportLink = styled(NavLink)`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: #898686;
  text-decoration: none;

  &:hover {
    color: #e8731a;
  }
`;

export const Tabs = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 28px;
  padding-left: 80px;
`;

export const Tab = styled(NavLink)`
  min-width: 94px;
  padding: 14px 20px;
  border-radius: 16px 16px 0 0;
  background: #f6f8fd;
  text-align: center;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  color: #010000;

  &.active {
    background: #ffffff;
    color: #ff5500;
  }
`;

export const BalanceInput = styled.input`
  width: 130px;
  padding: 10px 22px;
  border: 1px solid #d9deea;
  border-radius: 20px;
  background: #ffffff;
  font-size: 11px;
  font-weight: 700;
  text-align: center;
  color: #010101;
  outline: none;

  &:focus {
    border-color: #e8731a;
  }
`;