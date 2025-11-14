import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpsertProductDTO {
  
    @IsNotEmpty()
    nome: string;

    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty()
    price: number;
}