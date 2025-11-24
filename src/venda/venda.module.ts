import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from './entities/sale.entity'; // Corrigido para Sale, como no passo anterior
import { SaleProduct } from './entities/sale.entity'; // <-- É crucial adicionar este import
import { VendasController } from './venda.controller';
import { VendaService } from './venda.service';

@Module({
  imports: [
 
    TypeOrmModule.forFeature([Sale, SaleProduct]), 
  ],
   controllers: [VendasController],
   providers: [VendaService]
})
export class VendaModule {}