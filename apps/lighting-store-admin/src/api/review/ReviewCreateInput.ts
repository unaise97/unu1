import { USWhereUniqueInput } from "../us/USWhereUniqueInput";

export type ReviewCreateInput = {
  comment?: string | null;
  indexLight?: string | null;
  light?: USWhereUniqueInput | null;
  rating?: number | null;
};
