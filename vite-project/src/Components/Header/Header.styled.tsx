import styled from "styled-components";
import { device } from "../Breakpoints";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 20px;
  background-color: #ffffff;
  box-sizing: border-box;

  @media ${device.tablet} {
    padding: 20px 40px;
  }
`;

export const Logo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 30px;
  width: auto;
  margin-right: 35px;

  @media ${device.tablet} {
    height: 35px;
    margin-right: 45px;
  }
`;

export const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 900;
  font-family: "Inter", sans-serif;
  color: #000000;
  position: absolute;
  left: 12px;
  top: 55%;
  transform: translateY(-50%);

  @media ${device.tablet} {
    font-size: 20px;
    left: 15px;
  }
`;

export const UserBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #eef0f8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  color: #333;
`;

export const UserName = styled.p`
  margin: 0 10px 0 8px;
  font-size: 11px;
  font-weight: 500;
  color: #555;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${device.tablet} {
    margin: 0 18px 0 10px;
    max-width: none;
  }
`;

export const Divider = styled.span`
  width: 1px;
  height: 22px;
  background: #e0e0e0;
  margin-right: 12px;

  @media ${device.tablet} {
    margin-right: 18px;
  }
`;

export const LogoutButton = styled.button`
  padding: 0;
  border: none;
  background: transparent;
  font-size: 11px;
  font-weight: 500;
  color: #1a1a1a;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #e8731a;
  }
`;