import { UsCreateNestedManyWithoutCategoriesInput } from "./UsCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  description?: string | null;
  lights?: UsCreateNestedManyWithoutCategoriesInput;
  name?: string | null;
  uniqueName?: string | null;
};
