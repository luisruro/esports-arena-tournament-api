import { Controller, Get, Param, ParseUUIDPipe, Post, Query } from '@nestjs/common';
import { MatchesService } from './matches.service';

@Controller('matches')
export class MatchesController {
    constructor(private readonly matchesService: MatchesService) { }

    @Post(':tournamentId/randomMatch')
    enrollRandomPlayers(@Param('tournamentId', ParseUUIDPipe) tournamentId: string, @Query('quantity') quantity: number) {
        return this.matchesService.enrollRandomPlayers(tournamentId, quantity);
    }

    @Get()
    getAllMatches() {
        return this.matchesService.getAllMatches();
    }
}
