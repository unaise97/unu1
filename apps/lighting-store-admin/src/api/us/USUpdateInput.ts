import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderUpdateManyWithoutUsItemsInput } from "./OrderUpdateManyWithoutUsItemsInput";
import { ReviewUpdateManyWithoutUsItemsInput } from "./ReviewUpdateManyWithoutUsItemsInput";

export type USUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  indexCategory?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutUsItemsInput;
  price?: number | null;
  reviews?: ReviewUpdateManyWithoutUsItemsInput;
  stockQuantity?: number | null;
  uniqueName?: string | null;
};
