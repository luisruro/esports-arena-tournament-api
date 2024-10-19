import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    //This column to do soft delete
    @DeleteDateColumn()
    deletedAt?: Date;
}