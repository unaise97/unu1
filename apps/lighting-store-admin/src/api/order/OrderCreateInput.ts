import { USWhereUniqueInput } from "../us/USWhereUniqueInput";

export type OrderCreateInput = {
  indexLight?: string | null;
  indexOrderDate?: Date | null;
  light?: USWhereUniqueInput | null;
  orderDate?: Date | null;
  quantity?: number | null;
  totalAmount?: number | null;
};
