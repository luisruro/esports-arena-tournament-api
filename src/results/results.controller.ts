import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ResultsService } from './results.service';
import { CreateResultDto } from './dto/create-result.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('results')
@Controller('results')
export class ResultsController {
    constructor(private readonly resultsService: ResultsService) { }
    @ApiOperation({ summary: 'Create result' })
    @Post()
    async createResult(@Body() createResultDto: CreateResultDto) {
        return await this.resultsService.createResult(createResultDto)
    }

    @ApiOperation({ summary: 'Get result by tournament' })
    @Get('/tournament/:tournamentId')
    async findResultsByTournament(@Param('tournamentId') tournamentId: string) {
        return await this.resultsService.findResultsByTournament(tournamentId);
    }
}
