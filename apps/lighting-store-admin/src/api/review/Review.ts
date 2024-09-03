import { US } from "../us/US";

export type Review = {
  comment: string | null;
  createdAt: Date;
  id: string;
  indexLight: string | null;
  light?: US | null;
  rating: number | null;
  updatedAt: Date;
};
