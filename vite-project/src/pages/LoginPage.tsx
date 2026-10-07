import { useState } from "react";
import type { FormEvent, JSX } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Components/img/logo.png";
import {
  Wrapper,
  Logo,
  LogoImage,
  LogoText,
  Brand,
  BrandTitle,
  BrandSubtitle,
  Form,
  Hint,
  GoogleButton,
  GoogleLetter,
  Label,
  Input,
  ErrorText,
  Actions,
  SubmitButton,
  RegisterButton,
} from "./LoginPage.styled";

export function LoginPage(): JSX.Element {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setSubmitted(true);

    if (!email.trim() || !password.trim()) return;

    localStorage.setItem("token", "demo-token");
    navigate("/main");
  };

  const handleGoogle = (): void => {
    console.log("Google auth");
  };

  return (
    <Wrapper>
      <Logo>
        <LogoImage src={logo} alt="Logo" />
        <LogoText>INVESTIQ</LogoText>
      </Logo>

      <Brand>
        <BrandTitle>InvestIQ</BrandTitle>
        <BrandSubtitle>SMART FINANCE</BrandSubtitle>
      </Brand>

      <Form onSubmit={handleSubmit} noValidate>
        <Hint>Ви можете авторизуватися за допомогою акаунта Google</Hint>

        <GoogleButton type="button" onClick={handleGoogle}>
          <GoogleLetter>G</GoogleLetter> Google
        </GoogleButton>

        <Hint>Або увійти за допомогою ел. пошти та пароля після реєстрації</Hint>

        <Label>Електронна пошта:</Label>
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {submitted && !email.trim() && (
          <ErrorText>це обов'язкове поле</ErrorText>
        )}

        <Label>*Пароль:</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {submitted && !password.trim() && (
          <ErrorText>це обов'язкове поле</ErrorText>
        )}

        <Actions>
          <SubmitButton type="submit">УВІЙТИ</SubmitButton>
          <RegisterButton type="button" onClick={() => navigate("/register")}>
            РЕЄСТРАЦІЯ
          </RegisterButton>
        </Actions>
      </Form>
    </Wrapper>
  );
}