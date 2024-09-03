import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "indexLight";

export const OrderTitle = (record: TOrder): string => {
  return record.indexLight?.toString() || String(record.id);
};
