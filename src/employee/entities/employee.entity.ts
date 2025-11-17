import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Employee{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;
    

    @Column({ type: 'int' })
    age: number;
     
    @Column()
    position: string;
}