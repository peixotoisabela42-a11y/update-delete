import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';

@Injectable()
@Injectable()
export class EmployeeService  {

    constructor(

        @InjectRepository(Employee)
        private employeesRepository: Repository<Employee>
    ) {

    }

    
    
 

    findAll() {
        return this.employeesRepository.find();
    }

    async create(employee: CreateEmployeeDto) {
        const newProduct = this.employeesRepository.create(employee);        
        await this.employeesRepository.save(newProduct);
        
        return {
            "message": "fUncionário Criado!"
        };
    }

    async update(id: number, employeeData: UpdateEmployeeDto): Promise<Employee> {
        const employee = await this.employeesRepository.findOne({ where: { id } });

        if (!employee) {
            throw new NotFoundException(`Employee com ID ${id} não encontrado.`);
        }

        this.employeesRepository.merge(employee, employeeData );

        return this.employeesRepository.save(employee);
    }
    delete(id: number) {
        return this.employeesRepository.delete(id);
    }
}