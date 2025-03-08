import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('players')
@Controller('players')
export class PlayersController {
    constructor(private readonly playersService: PlayersService) { };

    @Get()
    @ApiOperation({ summary: 'Get all players' })
    async findAllPlayers() {
        return await this.playersService.findAllPlayers();
    }

    @Get('all-including-deleted')
    @ApiOperation({ summary: 'Get all players including deleted' })
    async findAllPlayersIncludingDeleted() {
        return await this.playersService.findAllPlayersIncludingDeleted();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get player by id' })
    async findPlayerById(@Param('id', ParseUUIDPipe) id: string) {
        return await this.playersService.findPlayerById(id);
    }

    @Post(':id/newPlayer')
    @ApiOperation({ summary: 'Create a new player' })
    async createPlayer(@Param('id', ParseUUIDPipe) id:string, @Body() createPlayerDto: CreatePlayerDto) {
        return await this.playersService.createPlayer(id, createPlayerDto);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Update player' })
    async updatePlayer(@Param('id', ParseUUIDPipe) id: string, @Body() player: UpdatePlayerDto) {
        return await this.playersService.updatePlayer(id, player);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete player' })
    async deletePlayer(@Param('id', ParseUUIDPipe) id: string) {
        return await this.playersService.deletePlayer(id);
    }

    @Patch('restore/:id')
    @ApiOperation({ summary: 'Restore player' })
    async restorePlayer(@Param('id') id: string) {
        return await this.playersService.restorePlayer(id);      
    }
}
