import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 40px;
  background-color: #ffffff;
`;

export const Logo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 35px;
  width: auto;
  margin-right: 45px;
`;

export const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 900;
  font-family: "Inter", sans-serif;
  color: #000000;
  position: absolute;
  left: 15px;
  top: 55%;
  transform: translateY(-50%);
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
  margin: 0 18px 0 10px;
  font-size: 11px;
  font-weight: 500;
  color: #555;
`;

export const Divider = styled.span`
  width: 1px;
  height: 22px;
  background: #e0e0e0;
  margin-right: 18px;
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