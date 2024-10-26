import { InjectRepository } from '@nestjs/typeorm';
import { Tournament } from './entities/tournament.entity';
import { Repository } from 'typeorm';
import { CreateTorunamentDto } from './dto/create-tournament.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateTournamentDto } from './dto/updateTournament.dto';

@Injectable()
export class TournamentsService {
    constructor(@InjectRepository(Tournament) private readonly tournamentRepository: Repository<Tournament>) { }

    async createTournament(createTournamentDto: CreateTorunamentDto): Promise<Tournament> {
        const tournamentFound = await this.tournamentRepository.findOne({
            where: {
                name: createTournamentDto.name
            }
        })

        if (tournamentFound) {
            throw new HttpException(`Tournament: ${createTournamentDto.name} already exists.`, HttpStatus.CONFLICT);
        }

        const newTournament = this.tournamentRepository.create(createTournamentDto);
        const saveTournament = await this.tournamentRepository.save(newTournament);

        return saveTournament;
    }

    async getAllTournaments(): Promise<Tournament[]> {
        const tournamentFound = await this.tournamentRepository.find({
            relations: ['tournamentPlayers', 'tournamentPlayers.player']
        });

        if (!tournamentFound) {
            throw new HttpException('No tournaments found.', HttpStatus.NOT_FOUND);
        }

        return tournamentFound;
    }

    async getTournamentById(id: string): Promise<Tournament> {
        const tournamentFound = await this.tournamentRepository.findOne({
            where: {
                id
            },
            relations: ['tournamentPlayers', 'tournamentPlayers.player']
        });

        if (!tournamentFound) {
            throw new HttpException(`Tournament with id: ${id} not found.`, HttpStatus.NOT_FOUND);
        }

        return tournamentFound;

    }

    async updateTournament(id: string, updateTournamentDto: UpdateTournamentDto) {
        const tournamentFound = await this.tournamentRepository.findOne({
            where: {
                id
            }
        });

        if (!tournamentFound) {
            throw new HttpException(`Tournament with id: ${id} not found.`, HttpStatus.NOT_FOUND);
        }

        return this.tournamentRepository.update(id, updateTournamentDto)
    }

    async deleteTournament(id: string) {
        const result = await this.tournamentRepository.softDelete({ id });

        if (result.affected === 0) {
            throw new HttpException(`Tournament with id: ${id} not found.`, HttpStatus.NOT_FOUND);
        }

        return result;
    }

    //This method includes the tournaments deleted
    async findAllTournamentsIncludingDeleted(): Promise<Tournament[]> {
        const query = await this.tournamentRepository.createQueryBuilder('tournament')
            .withDeleted()
            .getMany()

        return query;
    }


    //This method restores a tournaments to active state
    async restoreTorunament(id: string) {
        const result = await this.tournamentRepository.restore(id);

        if (result.affected === 0) {
            throw new HttpException('Tournament not found or not deleted', HttpStatus.NOT_FOUND);
        }

        return {
            message: 'Tournament restored successfully',
            tournamentId: id
        }
    }
}
