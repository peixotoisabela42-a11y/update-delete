import { Controller, Get, Post, Body,   Param, Delete, Put } from '@nestjs/common';
import { VendaService } from './venda.service';
import { CreateItemVendaDto} from './dto/create-venda.dto';
import { UpdateVendaDto } from './dto/update-venda.dto';

 @Controller('sales')
 export class VendasController {
      constructor(private readonly vendasService: VendaService) {}
 
        @Get('/')
        findAll() {
            return this.vendasService.findAll();
        }
    
        @Post('/')
        create(@Body() saleBody: CreateItemVendaDto) {
            return this.vendasService.create(saleBody);
        }
       
         
        @Put(':id')
        update(@Param('id') saleID: number,  @Body() updateBody: UpdateVendaDto) {
            return this.vendasService.update(saleID, updateBody);
        }
    
        @Delete(':id')
        delete(@Param('id') saleID: number) {
            return this.vendasService.delete(saleID);
        }
    }