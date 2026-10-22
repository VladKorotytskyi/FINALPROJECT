import { useState, useCallback } from "react";
import type { FormEvent, JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegCalendarAlt, FaChevronDown, FaCalculator } from "react-icons/fa";
import type { AppDispatch } from "../redux/store";
import { addTransaction } from "../redux/Transactions/operations";
import { updateBalance } from "../redux/Users/operations";
import {
  selectBalance,
  selectExpenseCategories,
  selectIncomeCategories,
} from "../redux/Users/selectors";
import {
  Form,
  Fields,
  DateBox,
  DateInput,
  DescriptionInput,
  SelectBox,
  CategorySelect,
  AmountBox,
  AmountInput,
  Buttons,
  SubmitButton,
  ClearButton,
  ErrorText,
} from "./MainForm.styled";

interface MainFormProps {
  type: "expense" | "income";
}

const getToday = (): string => new Date().toISOString().slice(0, 10);

export function MainForm({ type }: MainFormProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const balance = useSelector(selectBalance);
  const categories = useSelector(
    type === "expense" ? selectExpenseCategories : selectIncomeCategories
  );

  const [date, setDate] = useState<string>(getToday());
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleClear = useCallback((): void => {
    setDate(getToday());
    setDescription("");
    setCategory("");
    setAmount("");
    setError("");
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError("");

    const trimmedDescription = description.trim();
    const numericAmount = Number(amount);

    if (!trimmedDescription || !category || !numericAmount || numericAmount <= 0) {
      setError("Заповніть опис, категорію та суму");
      return;
    }

    if (type === "expense" && numericAmount > balance) {
      setError("Недостатньо коштів на балансі");
      return;
    }

    try {
      await dispatch(
        addTransaction({
          date,
          description: trimmedDescription,
          category,
          amount: numericAmount,
          type,
        })
      ).unwrap();

      const newBalance =
        type === "expense" ? balance - numericAmount : balance + numericAmount;

      await dispatch(updateBalance({ id: "1", balance: newBalance })).unwrap();

      handleClear();
    } catch {
      setError("Не вдалося зберегти запис");
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} noValidate>
        <Fields>
          <DateBox>
            <FaRegCalendarAlt />
            <DateInput
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </DateBox>
          <DescriptionInput
            placeholder="Опис товару"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <SelectBox>
            <CategorySelect
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Категорія товару</option>
              {categories.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </CategorySelect>
            <FaChevronDown size={10} />
          </SelectBox>
          <AmountBox>
            <AmountInput
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <FaCalculator />
          </AmountBox>
        </Fields>

        <Buttons>
          <SubmitButton type="submit">ВВЕСТИ</SubmitButton>
          <ClearButton type="button" onClick={handleClear}>
            ОЧИСТИТИ
          </ClearButton>
        </Buttons>
      </Form>
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
}