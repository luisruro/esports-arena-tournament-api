import { Player } from "src/players/entities/player.entity";
import { Tournament } from "src/tournaments/entities/tournament.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('results')
export class Result {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    score: number;

    @Column({ type: 'enum', enum: ['WINNER', 'LOSER', 'ELIMINATED'] })
    status: 'WINNER' | 'LOSER' | 'ELIMINATED';

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    resultDate: Date;

    @ManyToOne(() => Player, (player) => player.results, {onDelete: 'CASCADE'})
    player: Player

    @ManyToOne(() => Tournament, (tournament) => tournament.results, {onDelete: 'CASCADE'})
    tournament: Tournament;
}