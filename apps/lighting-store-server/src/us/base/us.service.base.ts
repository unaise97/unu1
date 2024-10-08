/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  US as PrismaUS,
  Order as PrismaOrder,
  Review as PrismaReview,
  Category as PrismaCategory,
} from "@prisma/client";

export class USServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.USCountArgs, "select">): Promise<number> {
    return this.prisma.us.count(args);
  }

  async usItems(args: Prisma.USFindManyArgs): Promise<PrismaUS[]> {
    return this.prisma.us.findMany(args);
  }
  async us(args: Prisma.USFindUniqueArgs): Promise<PrismaUS | null> {
    return this.prisma.us.findUnique(args);
  }
  async createUS(args: Prisma.USCreateArgs): Promise<PrismaUS> {
    return this.prisma.us.create(args);
  }
  async updateUS(args: Prisma.USUpdateArgs): Promise<PrismaUS> {
    return this.prisma.us.update(args);
  }
  async deleteUS(args: Prisma.USDeleteArgs): Promise<PrismaUS> {
    return this.prisma.us.delete(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<PrismaOrder[]> {
    return this.prisma.us
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orders(args);
  }

  async findReviews(
    parentId: string,
    args: Prisma.ReviewFindManyArgs
  ): Promise<PrismaReview[]> {
    return this.prisma.us
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reviews(args);
  }

  async getCategory(parentId: string): Promise<PrismaCategory | null> {
    return this.prisma.us
      .findUnique({
        where: { id: parentId },
      })
      .category();
  }
}
