import { Player } from "src/players/entities/player.entity";
import { Tournament } from "src/tournaments/entities/tournament.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tournament_players')
export class TournamentPlayer {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Tournament, tournament => tournament.tournamentPlayers, { onDelete: 'CASCADE' })
    tournament: Tournament;

    @ManyToOne(() => Player, player => player.tournamentPlayers, { onDelete: 'CASCADE' })
    player: Player;
}