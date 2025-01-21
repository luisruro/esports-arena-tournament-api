import { TournamentPlayer } from "src/matches/entities/tournament-player.entity";
import { Result } from "src/results/entities/result.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('players')
export class Player {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nickname: string;

    @Column()
    dob: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToOne(() => User, user => user.player, {onDelete: 'CASCADE'})
    @JoinColumn()
    user: User

    // Relación con los torneos del jugador
    @OneToMany(() => TournamentPlayer, (tournamentPlayer) => tournamentPlayer.player)
    tournamentPlayers: TournamentPlayer[];

    @OneToMany(() => Result, (result) => result.player )
    results: Result[]

    //This column to do soft delete
    @DeleteDateColumn()
    deletedAt?: Date;
}