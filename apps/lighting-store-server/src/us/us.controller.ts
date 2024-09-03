import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { USService } from "./us.service";
import { USControllerBase } from "./base/us.controller.base";

@swagger.ApiTags("us")
@common.Controller("us")
export class USController extends USControllerBase {
  constructor(protected readonly service: USService) {
    super(service);
  }
}
