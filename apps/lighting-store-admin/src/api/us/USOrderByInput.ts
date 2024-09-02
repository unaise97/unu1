import { SortOrder } from "../../util/SortOrder";

export type USOrderByInput = {
  categoryId?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  indexCategory?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  stockQuantity?: SortOrder;
  uniqueName?: SortOrder;
  updatedAt?: SortOrder;
};
