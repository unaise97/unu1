import { USWhereInput } from "./USWhereInput";
import { USOrderByInput } from "./USOrderByInput";

export type USFindManyArgs = {
  where?: USWhereInput;
  orderBy?: Array<USOrderByInput>;
  skip?: number;
  take?: number;
};
