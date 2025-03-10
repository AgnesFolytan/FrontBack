import { Test, TestingModule } from '@nestjs/testing';
import { KoncertController } from './koncert.controller';
import { KoncertService } from './koncert.service';

describe('KoncertController', () => {
  let controller: KoncertController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KoncertController],
      providers: [KoncertService],
    }).compile();

    controller = module.get<KoncertController>(KoncertController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
