import { ApiPropertyOptional, PartialType } from "@nestjs/swagger";
import { CreateTorunamentDto } from "./create-tournament.dto";

export class UpdateTournamentDto extends PartialType(CreateTorunamentDto) {
    @ApiPropertyOptional({
        description: "Tournament name (optional)",
        example: "Champions League 2025",
    })
    name?: string;

    @ApiPropertyOptional({
        description: "Tournament location (optional)",
        example: "New York City",
    })
    location?: string;

    @ApiPropertyOptional({
        description: "Tournament start date (optional, format: YYYY-MM-DD)",
        example: "2025-06-15",
        format: "date",
    })
    startDate?: string;

    @ApiPropertyOptional({
        description: "Tournament end date (optional, format: YYYY-MM-DD)",
        example: "2025-06-20",
        format: "date",
    })
    endDate?: string;
}