import { useEffect, useState } from "react";
import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../redux/store";
import { fetchUser, updateBalance } from "../redux/Users/operations";
import { selectBalance } from "../redux/Users/selectors";
import {
  BalanceWrapper,
  BalanceLabel,
  BalanceBox,
  BalanceInput,
  ConfirmButton,
} from "./Balance.styled";

export function Balance(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const balance = useSelector(selectBalance);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    dispatch(fetchUser(["1"]));
  }, [dispatch]);

  useEffect(() => {
    setValue(String(balance));
  }, [balance]);

  const handleConfirm = (): void => {
    const newBalance = Number(value);
    if (Number.isNaN(newBalance)) return;
    dispatch(updateBalance({ id: "1", balance: newBalance }));
  };

  return (
    <BalanceWrapper>
      <BalanceLabel>Баланс:</BalanceLabel>
      <BalanceBox>
        <BalanceInput
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        UAH
      </BalanceBox>
      <ConfirmButton onClick={handleConfirm}>ПІДТВЕРДИТИ</ConfirmButton>
    </BalanceWrapper>
  );
}