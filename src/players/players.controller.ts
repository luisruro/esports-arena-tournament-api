import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('players')
@Controller('players')
export class PlayersController {
    constructor(private readonly playersService: PlayersService) { };

    @Get()
    async findAllPlayers() {
        return await this.playersService.findAllPlayers();
    }

    @Get('all-including-deleted')
    async findAllPlayersIncludingDeleted() {
        return await this.playersService.findAllPlayersIncludingDeleted();
    }

    @Get(':id')
    async findPlayerById(@Param('id', ParseUUIDPipe) id: string) {
        return await this.playersService.findPlayerById(id);
    }

    @Post()
    async createPlayer(@Body() createPlayerDto: CreatePlayerDto) {
        return await this.playersService.createPlayer(createPlayerDto);
    }

    @Patch(':id')
    async updatePlayer(@Param('id', ParseUUIDPipe) id: string, @Body() player: UpdatePlayerDto) {
        return await this.playersService.updatePlayer(id, player);
    }

    @Delete(':id')
    async deletePlayer(@Param('id', ParseUUIDPipe) id: string) {
        return await this.playersService.deletePlayer(id);
    }

    @Patch('restore/:id')
    async restorePlayer(@Param('id') id: string) {
        return await this.playersService.restorePlayer(id);      
    }
}
