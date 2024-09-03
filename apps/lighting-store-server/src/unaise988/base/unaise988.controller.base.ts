/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { Unaise988Service } from "../unaise988.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { Unaise988CreateInput } from "./Unaise988CreateInput";
import { Unaise988 } from "./Unaise988";
import { Unaise988FindManyArgs } from "./Unaise988FindManyArgs";
import { Unaise988WhereUniqueInput } from "./Unaise988WhereUniqueInput";
import { Unaise988UpdateInput } from "./Unaise988UpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class Unaise988ControllerBase {
  constructor(
    protected readonly service: Unaise988Service,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Unaise988 })
  @nestAccessControl.UseRoles({
    resource: "Unaise988",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUnaise988(
    @common.Body() data: Unaise988CreateInput
  ): Promise<Unaise988> {
    return await this.service.createUnaise988({
      data: data,
      select: {
        createdAt: true,
        id: true,
        unaise98: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Unaise988] })
  @ApiNestedQuery(Unaise988FindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Unaise988",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async unaise988s(@common.Req() request: Request): Promise<Unaise988[]> {
    const args = plainToClass(Unaise988FindManyArgs, request.query);
    return this.service.unaise988s({
      ...args,
      select: {
        createdAt: true,
        id: true,
        unaise98: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Unaise988 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Unaise988",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async unaise988(
    @common.Param() params: Unaise988WhereUniqueInput
  ): Promise<Unaise988 | null> {
    const result = await this.service.unaise988({
      where: params,
      select: {
        createdAt: true,
        id: true,
        unaise98: true,
        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Unaise988 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Unaise988",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUnaise988(
    @common.Param() params: Unaise988WhereUniqueInput,
    @common.Body() data: Unaise988UpdateInput
  ): Promise<Unaise988 | null> {
    try {
      return await this.service.updateUnaise988({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          unaise98: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Unaise988 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Unaise988",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUnaise988(
    @common.Param() params: Unaise988WhereUniqueInput
  ): Promise<Unaise988 | null> {
    try {
      return await this.service.deleteUnaise988({
        where: params,
        select: {
          createdAt: true,
          id: true,
          unaise98: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
