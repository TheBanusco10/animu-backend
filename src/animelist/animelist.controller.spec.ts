import { Test, TestingModule } from '@nestjs/testing';
import { AnimelistController } from './animelist.controller';

describe('AnimelistController', () => {
  let controller: AnimelistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimelistController],
    }).compile();

    controller = module.get<AnimelistController>(AnimelistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
