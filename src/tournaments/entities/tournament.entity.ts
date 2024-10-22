import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    //This column to do soft delete
    @DeleteDateColumn()
    deletedAt?: Date;
}