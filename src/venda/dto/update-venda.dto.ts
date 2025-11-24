import { PartialType } from '@nestjs/mapped-types';
import {CreateItemVendaDto } from './create-venda.dto';

export class UpdateVendaDto extends PartialType(CreateItemVendaDto) {


}


