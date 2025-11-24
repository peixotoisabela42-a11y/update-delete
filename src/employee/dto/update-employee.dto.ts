import { IsNotEmpty, IsNumber } from "class-validator";

export class UpdateEmployeeDto {
     
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