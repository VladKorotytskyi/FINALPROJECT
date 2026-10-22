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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 12px;
  }
`;

export const ReportLink = styled(NavLink)`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #898686;
  text-decoration: none;

  &:hover {
    color: #e8731a;
  }

  @media ${device.tablet} {
    position: static;
    margin-left: auto;
  }
`;

export const Tabs = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 28px;
  padding-left: 20px;
`;

export const Tab = styled(NavLink)`
  min-width: 138px;
  padding: 14px 20px;
  border-radius: 20px 20px 0 0;
  background: #fafbfd;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  color: #000000;

  &.active {
    background: #ffffff;
    color: #ff751d;
  }

  @media ${device.tablet} {
    min-width: 110px;
  }
`;

export const MainContainer = styled.div`
  min-height: 560px;
  padding: 30px 20px;
  border-radius: 0 30px 30px 30px;
  background: #ffffff;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
`;

export const BottomSection = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 40px;
  align-items: flex-start;

  & > :first-child {
    flex: 1;
    min-width: 0;
  }

  @media ${device.tablet} {
    flex-direction: column;
    gap: 20px;

    & > :first-child {
      width: 100%;
    }
  }
`;