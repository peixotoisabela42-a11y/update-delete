import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products.entity';
import { SaleProduct } from 'src/venda/entities/sale.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Product, SaleProduct
    
  ])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
