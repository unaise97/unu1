import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  indexLight?: SortOrder;
  indexOrderDate?: SortOrder;
  lightId?: SortOrder;
  orderDate?: SortOrder;
  quantity?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
