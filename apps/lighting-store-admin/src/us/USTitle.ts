import { US as TUS } from "../api/us/US";

export const US_TITLE_FIELD = "name";

export const USTitle = (record: TUS): string => {
  return record.name?.toString() || String(record.id);
};
