import { Test, TestingModule } from '@nestjs/testing';
import { VendasController } from './venda.controller';
import { VendaService } from './venda.service';

describe('VendaController', () => {
  let controller: VendasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendasController],
      providers: [VendaService],
    }).compile();

    controller = module.get<VendasController>(VendasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
