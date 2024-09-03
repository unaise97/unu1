import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { USServiceBase } from "./base/us.service.base";

@Injectable()
export class USService extends USServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
