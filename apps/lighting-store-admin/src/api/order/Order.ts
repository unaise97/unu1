import { US } from "../us/US";

export type Order = {
  createdAt: Date;
  id: string;
  indexLight: string | null;
  indexOrderDate: Date | null;
  light?: US | null;
  orderDate: Date | null;
  quantity: number | null;
  totalAmount: number | null;
  updatedAt: Date;
};
