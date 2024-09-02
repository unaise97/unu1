import { US } from "../us/US";

export type Category = {
  createdAt: Date;
  description: string | null;
  id: string;
  lights?: Array<US>;
  name: string | null;
  uniqueName: string | null;
  updatedAt: Date;
};
