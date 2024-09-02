import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderCreateNestedManyWithoutUsItemsInput } from "./OrderCreateNestedManyWithoutUsItemsInput";
import { ReviewCreateNestedManyWithoutUsItemsInput } from "./ReviewCreateNestedManyWithoutUsItemsInput";

export type USCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  indexCategory?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutUsItemsInput;
  price?: number | null;
  reviews?: ReviewCreateNestedManyWithoutUsItemsInput;
  stockQuantity?: number | null;
  uniqueName?: string | null;
};
