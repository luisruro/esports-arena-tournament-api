import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { TournamentsService } from './tournaments.service';
import { CreateTorunamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/updateTournament.dto';

@Controller('tournaments')
export class TournamentsController {
    constructor(private readonly tournamentsService: TournamentsService) { }

    @Get()
    async getAllTournaments() {
        return await this.tournamentsService.getAllTournaments();
    }

    @Get('all-including-deleted')
    async findAllTournamentsIncludingDeleted() {
        return await this.tournamentsService.findAllTournamentsIncludingDeleted();
    }

    @Get(':id')
    async getTournamentById(@Param('id', ParseUUIDPipe) id: string) {
        return await this.tournamentsService.getTournamentById(id);
    }

    @Get(':id/restore')
    async restoreTorunament(@Param('id', ParseUUIDPipe) id: string) {
        return await this.tournamentsService.restoreTorunament(id);
    }

    @Post()
    async createTournament(@Body() createTournamentDto: CreateTorunamentDto) {
        return await this.tournamentsService.createTournament(createTournamentDto)
    }

    @Delete(':id')
    async deleteTournament(@Param('id', ParseUUIDPipe) id: string) {
        return await this.tournamentsService.deleteTournament(id);
    }

    @Patch(':id')
    async updateTournament(@Param('id', ParseUUIDPipe) id: string, @Body() updateTournamentDto: UpdateTournamentDto) {
        return await this.tournamentsService.updateTournament(id, updateTournamentDto);
    }

    @Patch('restore/:id')
    async restoreTournament(@Param('id', ParseUUIDPipe) id: string) {
        return await this.tournamentsService.restoreTorunament(id);      
    }
}
