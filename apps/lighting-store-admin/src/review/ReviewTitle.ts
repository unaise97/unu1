import { Review as TReview } from "../api/review/Review";

export const REVIEW_TITLE_FIELD = "indexLight";

export const ReviewTitle = (record: TReview): string => {
  return record.indexLight?.toString() || String(record.id);
};
