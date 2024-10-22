import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateTorunamentDto {
    @IsNotEmpty({message: "Name is required and must be a string"})
    @IsString()
    name: string;

    @IsNotEmpty({message: "Name is required and must be a string"})
    @IsString()
    location: string;

    @IsNotEmpty({message: "Start Date is required and must be a string"})
    @IsDateString({}, {message: "Start Date must be a valid date string (e.g., YYYY-MM-DD)"})
    startDate: string;

    @IsNotEmpty({message: "End Date is required and must be a string"})
    @IsDateString({}, {message: "End Date must be a valid date string (e.g., YYYY-MM-DD)"})
    endDate: string;
}