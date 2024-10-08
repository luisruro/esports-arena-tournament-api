import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayersService {
    constructor(@InjectRepository(Player) private playerRepository: Repository<Player>) { };

    //This method excludes the players deleted by default
    async findAllPlayers(): Promise<Player[]> {
        const playerFound = await this.playerRepository.find({
            relations: ['user']
        });

        if (!playerFound) {
            throw new HttpException('No players found', HttpStatus.NOT_FOUND)
        }

        return playerFound;
    }

    async findPlayerById(id: string): Promise<Player> {
        const playerFound = await this.playerRepository.findOne({
            where: {
                id
            },
            relations: ['user']
        });
        
        if (!playerFound) {
            throw new HttpException(`Player with id ${id} not found`, HttpStatus.NOT_FOUND);
        }

        return playerFound;
    }

    async createPlayer(player: CreatePlayerDto) {
        const playerFound = await this.playerRepository.findOne({
            where: {
                nickname: player.nickname,
                dob: player.dob
            }
        });

        if (playerFound) {
            throw new HttpException(`Player already exists ${player.nickname}`, HttpStatus.CONFLICT);
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

    async deletePlayer(id: string) {
        // const playerFound = await this.playerRepository.findOne({
        //     where: {
        //         id
        //     }
        // });
        
        // if (!playerFound) {
        //     throw new HttpException(`Player with id ${id} not found`, HttpStatus.NOT_FOUND);
        // }
        
        const result = await this.playerRepository.softDelete({id});

        if (result.affected === 0) {
            throw new HttpException(`Player with id ${id} not found`, HttpStatus.NOT_FOUND);
        }

        return result;
    }

    //This method includes the players deleted
    async findAllPlayersIncludingDeleted(): Promise<Player[]> {
        const query = await this.playerRepository.createQueryBuilder('player')
        .withDeleted()
        .getMany()

        return query;
    }

    //This method restores a player to active state
    async restorePlayer(id: string) {
        const result = await this.playerRepository.restore(id);
    
        if (result.affected === 0) {
            throw new HttpException('Player not found or not deleted', HttpStatus.NOT_FOUND);
        }

        return {
            message: 'Player restored successfully',
            playerId: id
        }
    }
}
