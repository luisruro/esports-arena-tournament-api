import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { TournamentsService } from './tournaments.service';
import { CreateTorunamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/updateTournament.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('tournaments')
@Controller('tournaments')
export class TournamentsController {
    constructor(private readonly tournamentsService: TournamentsService) { }

    @ApiOperation({ summary: 'Get all tournaments' })
    @Get()
    async getAllTournaments() {
        return await this.tournamentsService.getAllTournaments();
    }

    @ApiOperation({ summary: 'Get all tournaments including deleted' })
    @Get('all-including-deleted')
    async findAllTournamentsIncludingDeleted() {
        return await this.tournamentsService.findAllTournamentsIncludingDeleted();
    }

    @ApiOperation({ summary: 'Get tournament by id' })
    @Get(':id')
    async getTournamentById(@Param('id', ParseUUIDPipe) id: string) {
        return await this.tournamentsService.getTournamentById(id);
    }

    @ApiOperation({ summary: 'Restore tournament deleted' })
    @Get(':id/restore')
    async restoreTorunament(@Param('id', ParseUUIDPipe) id: string) {
        return await this.tournamentsService.restoreTorunament(id);
    }

    @ApiOperation({ summary: 'Create tournament' })
    @Post()
    async createTournament(@Body() createTournamentDto: CreateTorunamentDto) {
        return await this.tournamentsService.createTournament(createTournamentDto)
    }

    @ApiOperation({ summary: 'Delete tournament' })
    @Delete(':id')
    async deleteTournament(@Param('id', ParseUUIDPipe) id: string) {
        return await this.tournamentsService.deleteTournament(id);
    }

    @ApiOperation({ summary: 'Update tournament' })
    @Patch(':id')
    async updateTournament(@Param('id', ParseUUIDPipe) id: string, @Body() updateTournamentDto: UpdateTournamentDto) {
        return await this.tournamentsService.updateTournament(id, updateTournamentDto);
    }

    @ApiOperation({ summary: 'Restore tournament deleted' })
    @Patch('restore/:id')
    async restoreTournament(@Param('id', ParseUUIDPipe) id: string) {
        return await this.tournamentsService.restoreTorunament(id);
    }
}
