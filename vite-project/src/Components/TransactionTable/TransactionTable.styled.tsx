import styled from "styled-components";
import { device } from "../Breakpoints";

export const Head = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr 120px 40px;
  align-items: center;
  height: 36px;
  padding: 0 16px;
  border-radius: 12px 12px 0 0;
  background: #f5f6fb;
  font-size: 11px;
  font-weight: 700;
  color: #1a1a1a;

  @media ${device.tablet} {
    grid-template-columns: 80px 1fr 1fr 100px 30px;
    padding: 0 8px;
  }
`;

export const Body = styled.div`
  height: 352px;
  overflow-y: auto;
  background-image: repeating-linear-gradient(
    to bottom,
    transparent 0,
    transparent 31px,
    #eceff5 31px,
    #eceff5 32px
  );

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ff751d;
    border-radius: 4px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr 120px 40px;
  align-items: center;
  height: 32px;
  padding: 0 16px;
  font-size: 11px;
  color: #555555;

  @media ${device.tablet} {
    grid-template-columns: 80px 1fr 1fr 100px 30px;
    padding: 0 8px;
  }
`;

export const Amount = styled.span<{ $type: "expense" | "income" }>`
  font-weight: 700;
  color: ${({ $type }) => ($type === "expense" ? "#d9534f" : "#2e9e5b")};
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border: none;
  border-radius: 50%;
  background: #eef0f6;
  color: #555555;
  cursor: pointer;

  &:hover {
    color: #d9534f;
  }
`;