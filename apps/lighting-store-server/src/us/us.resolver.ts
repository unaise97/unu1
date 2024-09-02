import * as graphql from "@nestjs/graphql";
import { USResolverBase } from "./base/us.resolver.base";
import { US } from "./base/US";
import { USService } from "./us.service";

@graphql.Resolver(() => US)
export class USResolver extends USResolverBase {
  constructor(protected readonly service: USService) {
    super(service);
  }
}
