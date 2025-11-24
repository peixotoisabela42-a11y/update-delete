import { SaleProduct } from "src/venda/entities/sale.entity";
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Customer {
    
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
    SaleProduct: SaleProduct;
    fk_saleProduct: SaleProduct;
    sale: any;
}