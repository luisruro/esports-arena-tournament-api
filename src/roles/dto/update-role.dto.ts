import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateRoleDto } from "./create-role.dto";

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
    @ApiProperty({
        description: "Role name (optional for update)",
        example: "Moderator",
        required: false
    })
    role?: string;
}