import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('players')
export class Player {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    dob: string;

    @CreateDateColumn()
    createdAt: Date;

    //This column to do soft delete
    @DeleteDateColumn()
    deletedAt: Date;
}