import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemVendaDto } from './dto/create-venda.dto';
import { UpdateVendaDto } from './dto/update-venda.dto';
import { Sale } from './entities/sale.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class VendaService {

  constructor(

    @InjectRepository(Sale)
    private salesRepository: Repository<Sale>) {}

  findAll() {
    return this.salesRepository.find();
  }

  async create(sale:  CreateItemVendaDto) {
    const newSale= this.salesRepository.create(sale);
    await this.salesRepository.save(newSale);

    return {
      "message": "Venda Criada!"
    };
  }

  async update(id: number, SaleData:  UpdateVendaDto): Promise<Sale> {
    const sale = await this.salesRepository.findOne({ where: { id } });

    if (!sale) {
      throw new NotFoundException(`Venda com ID ${id} não encontrado.`);
    }

    this.salesRepository.merge(sale, SaleData);

    return this.salesRepository.save(sale);
  }
  delete(id: number) {
    return this.salesRepository.delete(id);
  }
}