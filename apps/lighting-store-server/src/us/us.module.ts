import { Module } from "@nestjs/common";
import { USModuleBase } from "./base/us.module.base";
import { USService } from "./us.service";
import { USController } from "./us.controller";
import { USResolver } from "./us.resolver";

@Module({
  imports: [USModuleBase],
  controllers: [USController],
  providers: [USService, USResolver],
  exports: [USService],
})
export class USModule {}
