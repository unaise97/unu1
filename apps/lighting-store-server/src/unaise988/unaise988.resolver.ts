import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { Unaise988ResolverBase } from "./base/unaise988.resolver.base";
import { Unaise988 } from "./base/Unaise988";
import { Unaise988Service } from "./unaise988.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Unaise988)
export class Unaise988Resolver extends Unaise988ResolverBase {
  constructor(
    protected readonly service: Unaise988Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
