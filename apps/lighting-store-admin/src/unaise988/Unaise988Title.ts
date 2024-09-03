import { Unaise988 as TUnaise988 } from "../api/unaise988/Unaise988";

export const UNAISE988_TITLE_FIELD = "username";

export const Unaise988Title = (record: TUnaise988): string => {
  return record.username?.toString() || String(record.id);
};
