import { Player } from "src/players/entities/player.entity";
import { Tournament } from "src/tournaments/entities/tournament.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('matches')
export class Match {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    player1: Player;

    @Column()
    player2: Player;

    @ManyToOne(() => Tournament, { onDelete: "CASCADE" })
    tournament: Tournament;

    @Column({ nullable: true })
    winner: string;

    @Column({ nullable: true })
    score: string;
}