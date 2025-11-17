import { Product } from "src/products/products.entity";
import { ManyToOne } from "typeorm";

export class Venda {
    @ManyToOne(() => Product, product => product.id)

    produto: Product;
    @ManyToOne(() => Venda, venda => venda.id)
    venda: Venda;
    id: number;
    produtos: string;
    quantidade: number;
    precoTotal: number;
}
