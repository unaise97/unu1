import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { Unaise988ModuleBase } from "./base/unaise988.module.base";
import { Unaise988Service } from "./unaise988.service";
import { Unaise988Controller } from "./unaise988.controller";
import { Unaise988Resolver } from "./unaise988.resolver";

@Module({
  imports: [Unaise988ModuleBase, forwardRef(() => AuthModule)],
  controllers: [Unaise988Controller],
  providers: [Unaise988Service, Unaise988Resolver],
  exports: [Unaise988Service],
})
export class Unaise988Module {}
