import styled from "styled-components";
import { device } from "../Breakpoints";

export const BalanceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media ${device.tablet} {
    flex-wrap: wrap;
  }
`;

export const BalanceLabel = styled.span`
  font-size: 12px;
  color: #898686;
`;

export const BalanceBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 22px;
  border: 1px solid #d9deea;
  border-radius: 20px;
  background: #ffffff;
  font-size: 12px;
  font-weight: 700;
  color: #010101;
`;

export const BalanceInput = styled.input`
  width: 80px;
  border: none;
  background: transparent;
  font-size: 12px;
  font-weight: 700;
  text-align: right;
  color: #010101;
  outline: none;
`;

export const ConfirmButton = styled.button`
  padding: 10px 22px;
  border: 1px solid #dfe3ee;
  border-radius: 20px;
  background: transparent;
  font-size: 12px;
  color: #a3a3a3;
  cursor: pointer;

  &:hover {
    color: #e8731a;
    border-color: #e8731a;
  }
`;