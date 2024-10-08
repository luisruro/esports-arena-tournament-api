import { applyDecorators, UseGuards } from "@nestjs/common";
import { Roles } from "./roles.decorator";
import { Role } from "src/common/enums/role.enum";
import { AuthGuard } from "../guards/auth/auth.guard";
import { RolesGuard } from "../guards/roles/roles.guard";

export function Auth(roles: Role[]) {
    return applyDecorators(Roles(...roles), UseGuards(AuthGuard, RolesGuard));//Applying multiple decorators at the same time @Roles and @UseGuards
}