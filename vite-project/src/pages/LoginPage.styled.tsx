import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background: #f4f4f4;
  font-family: "Roboto", sans-serif;
`;

export const Logo = styled.div`
  position: absolute;
  top: 20px;
  left: 24px;
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

export const Brand = styled.div`
  text-align: center;
`;

export const BrandTitle = styled.h1`
  margin: 0;
  font-size: 72px;
  font-weight: 700;
  color: #444;
`;

export const BrandSubtitle = styled.p`
  margin: 8px 0 0;
  font-size: 12px;
  letter-spacing: 4px;
  color: #666;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 320px;
  gap: 6px;
`;

export const Hint = styled.p`
  margin: 10px 0 6px;
  font-size: 11px;
  color: #888;
`;

export const GoogleButton = styled.button`
  align-self: center;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  background: transparent;
  border: none;
  font-size: 12px;
  cursor: pointer;
`;

export const GoogleLetter = styled.span`
  font-weight: 700;
  color: #4285f4;
`;

export const Label = styled.label`
  margin-top: 10px;
  font-size: 11px;
  font-weight: 700;
  color: #333;
`;

export const Input = styled.input`
  padding: 8px 4px;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  font-size: 12px;
  outline: none;

  &:focus {
    border-bottom-color: #e8731a;
  }
`;

export const ErrorText = styled.span`
  font-size: 9px;
  color: #d9534f;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
`;

export const SubmitButton = styled.button`
  padding: 10px 28px;
  border: none;
  border-radius: 20px;
  background: #e8731a;
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #cf6313;
  }
`;

export const RegisterButton = styled.button`
  border: none;
  background: transparent;
  font-size: 10px;
  letter-spacing: 1px;
  color: #666;
  cursor: pointer;
`;