import { SaleProduct } from "src/venda/entities/sale.entity";
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
    cpf: number;
    @Column()
    phone: string;

    @Column()
    salary: number;

    SaleProduct: SaleProduct;
    fk_saleProduct: SaleProduct;
    sale: any;
}