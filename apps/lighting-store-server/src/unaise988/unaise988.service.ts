import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Unaise988ServiceBase } from "./base/unaise988.service.base";

@Injectable()
export class Unaise988Service extends Unaise988ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
