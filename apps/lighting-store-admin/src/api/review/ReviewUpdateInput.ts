import { USWhereUniqueInput } from "../us/USWhereUniqueInput";

export type ReviewUpdateInput = {
  comment?: string | null;
  indexLight?: string | null;
  light?: USWhereUniqueInput | null;
  rating?: number | null;
};
