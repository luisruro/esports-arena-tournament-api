import { IsDateString, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreatePlayerDto {
    @IsString()
    @IsNotEmpty({message: "Name is required and must be a string"})
    nickname: string;

    @IsDateString({}, {message: "Date of birth must be a valid date string (e.g., YYYY-MM-DD)"})
    @IsNotEmpty({message: "Date of birth is required and must be a string"})
    dob: string;
}