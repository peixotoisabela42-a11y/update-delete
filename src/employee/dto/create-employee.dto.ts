import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateEmployeeDto {
    @IsNotEmpty()
    nome: string;

    @IsNumber()
    @IsNotEmpty()
    cpf: number;
    @IsNotEmpty()
    phone: string;
    @IsNotEmpty()
    salary: number;

      
}

