import type { JSX } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import {
  HeaderWrapper,
  Logo,
  LogoImage,
  LogoText,
  UserBlock,
  Avatar,
  UserName,
  Divider,
  LogoutButton,
} from "./Header.styled";

export function Header(): JSX.Element {
  const navigate = useNavigate();

  const handleLogout = (): void => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <HeaderWrapper>
      <Logo>
        <LogoImage src={logo} alt="Logo" />
        <LogoText>INVESTIQ</LogoText>
      </Logo>

      <UserBlock>
        <Avatar>U</Avatar>
        <UserName>User Name</UserName>
        <Divider />
        <LogoutButton onClick={handleLogout}>Вийти</LogoutButton>
      </UserBlock>
    </HeaderWrapper>
  );
}