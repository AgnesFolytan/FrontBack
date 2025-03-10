import { Test, TestingModule } from '@nestjs/testing';
import { KoncertService } from './koncert.service';

describe('KoncertService', () => {
  let service: KoncertService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KoncertService],
    }).compile();

    service = module.get<KoncertService>(KoncertService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
