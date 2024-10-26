import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlayersService } from 'src/players/players.service';
import { TournamentsService } from 'src/tournaments/tournaments.service';
import { TournamentPlayer } from './entities/tournament-player.entity';

@Injectable()
export class MatchesService {
    constructor(@InjectRepository(TournamentPlayer) private tournamentPlayerRepository: Repository<TournamentPlayer>,
        private readonly playersService: PlayersService,
        private readonly tournamentsService: TournamentsService
    ) { }

    async enrollRandomPlayers(tournamentId: string, quantity: number): Promise<TournamentPlayer[]> {

        const tournamentFound = await this.tournamentsService.getTournamentById(tournamentId);
        if (!tournamentFound) {
            throw new HttpException(`Tournament with id: ${tournamentId} not found.`, HttpStatus.NOT_FOUND);
        }

        //Get all active players
        const players = await this.playersService.findAllPlayers();

        if (players.length === 0) {
            throw new HttpException('No active players found.', HttpStatus.NOT_FOUND);
        }

        // Si el número solicitado de jugadores excede la cantidad disponible, ajusta el conteo
        if (quantity > players.length) {
            quantity = players.length;
        }   

        // Randomly select players
        const randomPlayers = players.sort(() =>  0.5 - Math.random());
        const selectedPlayers = randomPlayers.slice(0, quantity);

        //Assign selected players to the tournament
        const tournamentPlayers: TournamentPlayer[] = [];

        for (const player of selectedPlayers) {
            const tournamentPlayer = this.tournamentPlayerRepository.create({
                tournament: tournamentFound,
                player: player
            });
            tournamentPlayers.push(await this.tournamentPlayerRepository.save(tournamentPlayer));
        }

        return tournamentPlayers;
    }
}
