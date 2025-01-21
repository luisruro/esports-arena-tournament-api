import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ResultsService } from './results.service';
import { CreateResultDto } from './dto/create-result.dto';

@Controller('results')
export class ResultsController {
    constructor(private readonly resultsService: ResultsService) { }

    @Post()
    async createResult(@Body() createResultDto: CreateResultDto) {
        return await this.resultsService.createResult(createResultDto)
    }

    @Get('/tournament/:tournamentId')
    async findResultsByTournament(@Param('tournamentId') tournamentId: string) {
        return await this.resultsService.findResultsByTournament(tournamentId);
    }
}
