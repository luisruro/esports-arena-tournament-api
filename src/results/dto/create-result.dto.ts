import { IsEnum, IsNotEmpty, IsUUID, Min } from "class-validator";

export class CreateResultDto {
    @IsNotEmpty()
    @IsUUID()
    playerId: string;

    @IsNotEmpty()
    @IsUUID()
    tournamentId: string;

    @IsNotEmpty()
    @Min(0)
    score: number;

    @IsEnum(['WINNER', 'LOSER', 'ELIMINATED'])
    status: 'WINNER' | 'LOSER' | 'ELIMINATED'
}