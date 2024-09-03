import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { USListRelationFilter } from "../us/USListRelationFilter";

export type CategoryWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  lights?: USListRelationFilter;
  name?: StringNullableFilter;
  uniqueName?: StringNullableFilter;
};
