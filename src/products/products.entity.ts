import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
 
import { SaleProduct } from "src/venda/entities/sale.entity";


@Entity('product')  
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
 
     

     
    @Column({ type: 'text', nullable: true })
    description: string;
 
      

    @Column('decimal', { precision: 10, scale: 2 })
    price: number;

    @Column({ default: 0 })
    stock: number;

     
    @OneToMany(() => SaleProduct, saleProduct => saleProduct.product)
    saleProducts: SaleProduct[];
  
}