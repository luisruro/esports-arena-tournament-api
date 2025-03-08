import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreatePlayerDto } from "./create-player.dto";


export class UpdatePlayerDto extends PartialType(CreatePlayerDto) {
    @ApiProperty({
        description: "Player's nickname (optional)",
        example: "Shadow99",
        required: false
    })
    nickname?: string;

    @ApiProperty({
        description: "Player's date of birth (optional)",
        example: "2000-05-15",
        format: "date",
        required: false
    })
    dob?: string;
}