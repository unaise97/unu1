import { SortOrder } from "../../util/SortOrder";

export type ReviewOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  indexLight?: SortOrder;
  lightId?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
