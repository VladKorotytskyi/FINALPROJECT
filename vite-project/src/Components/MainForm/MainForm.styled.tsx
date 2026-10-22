import styled from "styled-components";
import { device } from "../Breakpoints";

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Fields = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;
  border: 1px solid #e5e8f0;
  border-radius: 20px;
  background: #ffffff;
  overflow: hidden;
`;

export const DateBox = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  color: #1a1a1a;

  @media ${device.tablet} {
    padding: 0 8px;
  }
`;

export const DateInput = styled.input`
  width: 100px;
  padding: 12px 0;
  border: none;
  background: transparent;
  font-size: 12px;
  font-weight: 700;
  color: #1a1a1a;
  outline: none;

  &::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const DescriptionInput = styled.input`
  flex: 1;
  min-width: 0;
  padding: 12px 16px;
  border: none;
  border-left: 1px solid #e5e8f0;
  font-size: 12px;
  outline: none;

  @media ${device.tablet} {
    padding: 12px 8px;
  }
`;

export const SelectBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 170px;
  border-left: 1px solid #e5e8f0;
  color: #898686;

  svg {
    position: absolute;
    right: 14px;
    pointer-events: none;
  }

  @media ${device.tablet} {
    width: 130px;
  }
`;

export const CategorySelect = styled.select`
  width: 100%;
  padding: 12px 32px 12px 16px;
  border: none;
  background: transparent;
  font-size: 12px;
  color: #898686;
  appearance: none;
  outline: none;

  @media ${device.tablet} {
    padding: 12px 28px 12px 8px;
  }
`;

export const AmountBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 110px;
  padding: 0 16px;
  border-left: 1px solid #e5e8f0;
  color: #555555;

  @media ${device.tablet} {
    width: 90px;
    padding: 0 8px;
  }
`;

export const AmountInput = styled.input`
  width: 100%;
  min-width: 0;
  padding: 12px 0;
  border: none;
  font-size: 12px;
  text-align: right;
  outline: none;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 12px;
`;

export const SubmitButton = styled.button`
  padding: 12px 32px;
  border: none;
  border-radius: 20px;
  background: #ff751d;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background: #e8731a;
  }
`;

export const ClearButton = styled.button`
  padding: 12px 32px;
  border: 1px solid #e5e8f0;
  border-radius: 20px;
  background: #ffffff;
  font-size: 12px;
  font-weight: 700;
  color: #1a1a1a;
  cursor: pointer;

  &:hover {
    border-color: #ff751d;
  }
`;

export const ErrorText = styled.p`
  margin: 8px 0 0;
  font-size: 11px;
  color: #d9534f;
`;