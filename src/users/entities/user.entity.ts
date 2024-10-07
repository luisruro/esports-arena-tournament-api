
//import { Role } from "src/roles/entities/role.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    // @ManyToOne(() => Role, role => role.users, {onDelete: 'CASCADE'})
    // @JoinColumn()
    // rol: Role

    @CreateDateColumn()
    creationDate: Date;
}