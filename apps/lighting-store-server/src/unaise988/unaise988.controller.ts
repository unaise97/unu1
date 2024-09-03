import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { Unaise988Service } from "./unaise988.service";
import { Unaise988ControllerBase } from "./base/unaise988.controller.base";

@swagger.ApiTags("unaise988s")
@common.Controller("unaise988s")
export class Unaise988Controller extends Unaise988ControllerBase {
  constructor(
    protected readonly service: Unaise988Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
