import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { USWhereUniqueInput } from "../us/USWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  indexLight?: StringNullableFilter;
  indexOrderDate?: DateTimeNullableFilter;
  light?: USWhereUniqueInput;
  orderDate?: DateTimeNullableFilter;
  quantity?: IntNullableFilter;
  totalAmount?: FloatNullableFilter;
};
