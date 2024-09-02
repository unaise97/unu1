import { US as TUS } from "../api/us/US";

export const US_TITLE_FIELD = "id";

export const USTitle = (record: TUS): string => {
  return record.id?.toString() || String(record.id);
};
