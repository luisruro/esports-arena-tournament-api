import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRoleDto {
    @ApiProperty({
        description: "Role name",
        example: "Admin",
        required: true
    })
    @IsString()
    @IsNotEmpty({ message: 'Role is required and must be a string' })
    role: string;
}