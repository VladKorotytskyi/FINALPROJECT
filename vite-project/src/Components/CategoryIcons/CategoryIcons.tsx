import type { IconType } from "react-icons";
import {
  FaShoppingBasket,
  FaCar,
  FaTools,
  FaFileInvoice,
  FaBookOpen,
  FaEllipsisH,
  FaMoneyBillWave,
  FaPiggyBank,
} from "react-icons/fa";
import {
  MdLocalBar,
  MdMovie,
  MdVolunteerActivism,
  MdWeekend,
  MdFitnessCenter,
} from "react-icons/md";

const categoryIcons: Record<string, IconType> = {
  products: FaShoppingBasket,
  alcohol: MdLocalBar,
  entertainment: MdMovie,
  health: MdVolunteerActivism,
  transport: FaCar,
  home: MdWeekend,
  tech: FaTools,
  utility: FaFileInvoice,
  sports: MdFitnessCenter,
  education: FaBookOpen,
  other: FaEllipsisH,
  salary: FaMoneyBillWave,
  add_income: FaPiggyBank,
};

export function getCategoryIcon(icon: string): IconType {
  return categoryIcons[icon] ?? FaEllipsisH;
}