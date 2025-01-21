import { TournamentPlayer } from "src/matches/entities/tournament-player.entity";
import { Result } from "src/results/entities/result.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('tournaments')
export class Tournament {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    location: string;

    @Column()
    startDate: string;

    @Column()
    endDate: string;

    // Relación con los jugadores del torneo
    @OneToMany(() => TournamentPlayer, (tournamentPlayer) => tournamentPlayer.tournament)
    tournamentPlayers: TournamentPlayer[];

    @OneToMany(() => Result, (result) => result.tournament)
    results: Result[]

    //This column to do soft delete
    @DeleteDateColumn()
    deletedAt?: Date;
}