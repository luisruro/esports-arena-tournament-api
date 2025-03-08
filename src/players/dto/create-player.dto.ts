import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreatePlayerDto {
    @ApiProperty({
        description: "Player's nickname",
        example: "Shadow99"
    })
    @IsString()
    @IsNotEmpty({ message: "Name is required and must be a string" })
    nickname: string;

    @ApiProperty({
        description: "Player's date of birth",
        example: "2000-05-15",
        format: "date"
    })
    @IsDateString({}, { message: "Date of birth must be a valid date string (e.g., YYYY-MM-DD)" })
    @IsNotEmpty({ message: "Date of birth is required and must be a string" })
    dob: string;
}