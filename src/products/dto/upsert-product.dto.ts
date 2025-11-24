import { IsNotEmpty, IsNumber } from "class-validator";

export class UpsertProductDTO {
  
    

    @IsNumber()
    @IsNotEmpty()
    preco: number;

    @IsNumber()
    @IsNotEmpty()
    stock: number;


 
}