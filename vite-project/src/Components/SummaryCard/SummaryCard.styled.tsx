import styled from "styled-components";

export const Box = styled.div`
  width: 213px;
  background-color: #f5f6fb;
  border-radius: 20px 20px 20px 0px;
  overflow: hidden;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 12px 0;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000000;
  border-bottom: 2px solid #ffffff;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  padding: 0 20px;
  font-size: 12px;
  color: #52555f;
  border-bottom: 2px solid #ffffff;

  &:last-child {
    border-bottom: none;
  }
`;