import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, PrimaryColumn } from "typeorm";
import { Customer } from "src/customers/customers.entity";
import { Employee } from "src/employee/entities/employee.entity";
import { Product } from "src/products/products.entity";
 
 

 

@Entity('sale')
export class Sale {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'sale_date' })
    saleDate: Date;
    
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    total: number;
    
    // ManyToOne: Customer
    @ManyToOne(() => Customer, customer => customer.sale) 
    @JoinColumn({ name: 'customer_id' })
    customer: Customer;

    // ManyToOne: Employee
    @ManyToOne(() => Employee, employee => employee.sale) 
    @JoinColumn({ name: 'employee_id' })
    employee: Employee;

    // OneToMany para a entidade de junção (SaleProduct)
    @OneToMany(() => SaleProduct, saleProduct => saleProduct.sale)
    items: SaleProduct[];
}


 
@Entity('saleproduct')
export class SaleProduct {
    
    @PrimaryColumn({ name: 'sale_id' })
    saleId: number;
    
    @PrimaryColumn({ name: 'product_id' })
    productId: number;

    @Column()
    quantity: number;

    @Column({ name: 'unit_value', type: 'decimal', precision: 10, scale: 2 })
    unitValue: number;
 
    @ManyToOne(() => Product, product => product.saleProducts)
    @JoinColumn({ name: 'product_id' })
    product: Product;

   
    @ManyToOne(() => Sale, sale => sale.items)
    @JoinColumn({ name: 'sale_id' })
    sale: Sale;  
}