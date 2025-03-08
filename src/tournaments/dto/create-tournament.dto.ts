import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateTorunamentDto {
    @ApiProperty({
        description: "Tournament name",
        example: "Champions League 2025",
    })
    @IsNotEmpty({message: "Name is required and must be a string"})
    @IsString()
    name: string;

    @ApiProperty({
        description: "Tournament location",
        example: "New York City",
    })
    @IsNotEmpty({message: "Name is required and must be a string"})
    @IsString()
    location: string;

    @ApiProperty({
        description: "Tournament start date (format: YYYY-MM-DD)",
        example: "2025-06-15",
        format: "date",
    })
    @IsNotEmpty({message: "Start Date is required and must be a string"})
    @IsDateString({}, {message: "Start Date must be a valid date string (e.g., YYYY-MM-DD)"})
    startDate: string;

    @ApiProperty({
        description: "Tournament end date (format: YYYY-MM-DD)",
        example: "2025-06-20",
        format: "date",
    })
    @IsNotEmpty({message: "End Date is required and must be a string"})
    @IsDateString({}, {message: "End Date must be a valid date string (e.g., YYYY-MM-DD)"})
    endDate: string;
}