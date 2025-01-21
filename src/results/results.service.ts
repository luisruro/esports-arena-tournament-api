import { InjectRepository } from '@nestjs/typeorm';
import { Result } from './entities/result.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateResultDto } from './dto/create-result.dto';
import { PlayersService } from 'src/players/players.service';
import { TournamentsService } from 'src/tournaments/tournaments.service';

@Injectable()
export class ResultsService {
    constructor(@InjectRepository(Result) private readonly resultsRepository: Repository<Result>,
private readonly playersService : PlayersService,
private readonly tournamentsService: TournamentsService) { }

    async createResult(createResultDto: CreateResultDto) {

        const {playerId, tournamentId, score, status } = createResultDto
        //Verify if the player already exists
        const playerFound = await this.playersService.findPlayerById(playerId)
        if (!playerFound) {
            throw new HttpException(`Player with id: ${playerId} not found.`, HttpStatus.NOT_FOUND);
        }

        //Verify if the tournament already exists
        const tournamentFound = await this.tournamentsService.getTournamentById(tournamentId)
        if (!tournamentFound) {
            throw new HttpException(`Tournament with id: ${tournamentId} not found.`, HttpStatus.NOT_FOUND);
        }

        //Create the result
        const result = this.resultsRepository.create({ 
            ...createResultDto,
            player: playerFound,
            tournament: tournamentFound
        });

        return await this.resultsRepository.save(result);
    }

    async findResultsByTournament(tournamentId: string) {
        const resultFound =  this.resultsRepository.find({
            where: {
                tournament: { id: tournamentId }
            },
            relations: ['player', 'tournament']
        })

        if (!resultFound) {
            throw new HttpException(`Tournament with id: ${tournamentId} not found.`, HttpStatus.NOT_FOUND);
        }

        return resultFound;
    }
}
