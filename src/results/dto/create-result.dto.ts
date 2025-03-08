import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsUUID, Min } from "class-validator";

export class CreateResultDto {
    @ApiProperty({
        description: "Unique identifier of the player",
        example: "88fdf6cb-1fab-4f21-8dd1-f74b85369d95"
    })
    @IsNotEmpty()
    @IsUUID()
    playerId: string;

    @ApiProperty({
        description: "Unique identifier of the tournament",
        example: "17098c78-9735-406f-9ac9-a9d5cc3a35c0"
    })
    @IsNotEmpty()
    @IsUUID()
    tournamentId: string;

    @ApiProperty({
        description: "Score obtained by the player",
        example: 10,
        minimum: 0
    })
    @IsNotEmpty()
    @Min(0)
    score: number;

    @ApiProperty({
        description: "Status of the player in the tournament",
        enum: ['WINNER', 'LOSER', 'ELIMINATED'],
        example: "WINNER"
    })
    @IsEnum(['WINNER', 'LOSER', 'ELIMINATED'])
    status: 'WINNER' | 'LOSER' | 'ELIMINATED'
}