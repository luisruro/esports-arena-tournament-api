import { Controller, Get, Param, ParseUUIDPipe, Post, Query } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('matches')
@Controller('matches')
export class MatchesController {
    constructor(private readonly matchesService: MatchesService) { }

    @ApiOperation({ summary: 'Create matches' })
    @Post(':tournamentId/randomMatch')
    enrollRandomPlayers(@Param('tournamentId', ParseUUIDPipe) tournamentId: string, @Query('quantity') quantity: number) {
        return this.matchesService.enrollRandomPlayers(tournamentId, quantity);
    }

    @ApiOperation({ summary: 'Get matches' })
    @Get()
    getAllMatches() {
        return this.matchesService.getAllMatches();
    }
}
