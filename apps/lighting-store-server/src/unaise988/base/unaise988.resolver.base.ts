/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Unaise988 } from "./Unaise988";
import { Unaise988CountArgs } from "./Unaise988CountArgs";
import { Unaise988FindManyArgs } from "./Unaise988FindManyArgs";
import { Unaise988FindUniqueArgs } from "./Unaise988FindUniqueArgs";
import { CreateUnaise988Args } from "./CreateUnaise988Args";
import { UpdateUnaise988Args } from "./UpdateUnaise988Args";
import { DeleteUnaise988Args } from "./DeleteUnaise988Args";
import { Unaise988Service } from "../unaise988.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Unaise988)
export class Unaise988ResolverBase {
  constructor(
    protected readonly service: Unaise988Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Unaise988",
    action: "read",
    possession: "any",
  })
  async _unaise988sMeta(
    @graphql.Args() args: Unaise988CountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Unaise988])
  @nestAccessControl.UseRoles({
    resource: "Unaise988",
    action: "read",
    possession: "any",
  })
  async unaise988s(
    @graphql.Args() args: Unaise988FindManyArgs
  ): Promise<Unaise988[]> {
    return this.service.unaise988s(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Unaise988, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Unaise988",
    action: "read",
    possession: "own",
  })
  async unaise988(
    @graphql.Args() args: Unaise988FindUniqueArgs
  ): Promise<Unaise988 | null> {
    const result = await this.service.unaise988(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Unaise988)
  @nestAccessControl.UseRoles({
    resource: "Unaise988",
    action: "create",
    possession: "any",
  })
  async createUnaise988(
    @graphql.Args() args: CreateUnaise988Args
  ): Promise<Unaise988> {
    return await this.service.createUnaise988({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Unaise988)
  @nestAccessControl.UseRoles({
    resource: "Unaise988",
    action: "update",
    possession: "any",
  })
  async updateUnaise988(
    @graphql.Args() args: UpdateUnaise988Args
  ): Promise<Unaise988 | null> {
    try {
      return await this.service.updateUnaise988({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Unaise988)
  @nestAccessControl.UseRoles({
    resource: "Unaise988",
    action: "delete",
    possession: "any",
  })
  async deleteUnaise988(
    @graphql.Args() args: DeleteUnaise988Args
  ): Promise<Unaise988 | null> {
    try {
      return await this.service.deleteUnaise988(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
