import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column('decimal', {precision: 10, scale: 2})
    price: number;

    @OneToMany(() => Product, product => product.id)
    vendas: Product[];
    
}