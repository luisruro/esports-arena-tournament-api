import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayersService {
    constructor(@InjectRepository(Player) private playerRepository: Repository<Player>) { };

    async findAllPlayers(): Promise<Player[]> {
        const playerFound = await this.playerRepository.find();

        if (!playerFound) {
            throw new HttpException('No players found', HttpStatus.NOT_FOUND)
        }

        return playerFound;
    }

    async findPlayerById(id: string): Promise<Player> {
        const playerFound = await this.playerRepository.findOne({
            where: {
                id
            }
        });
        
        if (!playerFound) {
            throw new HttpException(`Player with id ${id} not found`, HttpStatus.NOT_FOUND);
        }

        return playerFound;
    }

    async createPlayer(player: CreatePlayerDto) {
        const playerFound = await this.playerRepository.findOne({
            where: {
                name: player.name,
                email: player.email,
                dob: player.dob
            }
        });

        if (playerFound) {
            throw new HttpException(`Player already exists ${player.name}`, HttpStatus.CONFLICT);
        }

        const newPlayer = await this.playerRepository.create(player)

        return this.playerRepository.save(newPlayer);
    }

    async updatePlayer(id: string, player: UpdatePlayerDto) {
        const playerFound = await this.playerRepository.findOne({
            where: {
                id
            }
        });

        if (!playerFound) {
            throw new HttpException(`Player with id ${id} not found`, HttpStatus.NOT_FOUND);
        }

        return this.playerRepository.update(id, player)
    }
}
