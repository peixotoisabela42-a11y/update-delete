import { IsNotEmpty, IsNumber } from "class-validator";

export class UpdateEmployeeDto {

    @IsNotEmpty()
    nome: string;

     
    @IsNotEmpty()
    email: string;

    @IsNumber()
    @IsNotEmpty()
    age: number;

    @IsNotEmpty()
    position: string;

}