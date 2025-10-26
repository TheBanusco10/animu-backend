import { Controller, Get } from '@nestjs/common';
import GetAnimelistUseCase from './application/useCases/getAnimelist.useCase';

@Controller('animelist')
export class AnimelistController {
  constructor(private readonly getAnimelistUserCase: GetAnimelistUseCase) {}

  @Get()
  async getAnimelist() {
    return await this.getAnimelistUserCase.execute();
  }
}
