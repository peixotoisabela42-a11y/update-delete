import { Injectable, NotFoundException } from "@nestjs/common";
import { UpsertDTO } from "./dto/upsert.dto";
import { Customer } from "./customers.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CustomersService {

    constructor(

        @InjectRepository(Customer)
        private customersRepository: Repository<Customer>
    ) {

    }


    get() {
        return this.customersRepository.find();
    }


    async create(customers: UpsertDTO) {

        const newcustomer = this.customersRepository.create(customers);

        return this.customersRepository.save(newcustomer);
    }


    async update(id: number, customersData: UpsertDTO): Promise<Customer> {

        const customer = await this.customersRepository.findOne({ where: { id } });


        if (!customer) {

            throw new NotFoundException(`Cliente com ID ${id} não encontrado.`);
        }


        this.customersRepository.merge(customer, customersData);


        return this.customersRepository.save(customer);
    }


    delete(id: number) {

        return this.customersRepository.delete(id);
    }
}
