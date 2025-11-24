import { Injectable, NotFoundException } from '@nestjs/common';
import { UpsertProductDTO } from './dto/upsert-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

    constructor(

        @InjectRepository(Product)
        private productsRepository: Repository<Product>) { }
    findAll() {
        return this.productsRepository.find();
    }

    async create(product: UpsertProductDTO) {
        const newProduct = this.productsRepository.create(product);
        await this.productsRepository.save(newProduct);

        return {
            "message": "Produto Criado!"
        };
    }

    async update(id: number, productData: UpsertProductDTO): Promise<Product> {
        const product = await this.productsRepository.findOne({ where: { id } });

        if (!product) {
            throw new NotFoundException(`Produto com ID ${id} não encontrado.`);
        }

        this.productsRepository.merge(product, productData);

        return this.productsRepository.save(product);
    }
    delete(id: number) {
        return this.productsRepository.delete(id);
    }
}