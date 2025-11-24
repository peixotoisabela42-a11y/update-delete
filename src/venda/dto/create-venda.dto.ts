 

import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateItemVendaDto {
    @IsNumber()
    @IsNotEmpty()
    produtoId: number;

    @IsNumber()
    @IsNotEmpty()
    total: number;

    @IsNumber()
    @IsNotEmpty()
    sale_date: number;


    
   
}