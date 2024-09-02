import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { USWhereUniqueInput } from "../us/USWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ReviewWhereInput = {
  comment?: StringNullableFilter;
  id?: StringFilter;
  indexLight?: StringNullableFilter;
  light?: USWhereUniqueInput;
  rating?: IntNullableFilter;
};
