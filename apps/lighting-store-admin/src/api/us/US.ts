import { Category } from "../category/Category";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type US = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  indexCategory: string | null;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  reviews?: Array<Review>;
  stockQuantity: number | null;
  uniqueName: string | null;
  updatedAt: Date;
};
