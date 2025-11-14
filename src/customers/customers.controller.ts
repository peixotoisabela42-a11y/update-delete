import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CustomersService } from "./customers.service";
import { UpsertDTO } from "./dto/upsert.dto"

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersService: CustomersService) {}
    
     
    @Get()
    async showAll() {
        
        const customers = await this.customersService.get(); 
        
       
        return {
            'customers': customers
        }
    }

    @Post()
    create(@Body() bodyCustomer: UpsertDTO) {
      
        return this.customersService.create(bodyCustomer); 
    }
    
    @Put(':id') 
    update(@Param('id', ParseIntPipe) id: number, @Body() updatebody: UpsertDTO) {
      
        
    {
     
        return this.customersService.update(id, updatebody);
    }
    }
    @Delete(':id')
    delete(@Param('id') id: number) {
      
        return this.customersService.delete(id);
    }
}


 