import { Player } from "src/players/entities/player.entity";
import { Role } from "src/roles/entities/role.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 500 })
    name: string;

    @Column({ unique: true, nullable: false })
    email: string;

    @Column({ nullable: false, select: false })
    password: string;

    @ManyToOne(() => Role, role => role.users, {onDelete: 'CASCADE'})
    @JoinColumn()
    role: Role

    @OneToOne(() => Player, player => player.user, {onDelete: 'CASCADE'})
    @JoinColumn()
    player: Player

    @CreateDateColumn()
    creationDate: Date;
}