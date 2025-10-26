import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import GetAnimelistUseCase from './application/useCases/getAnimelist.useCase';
import UpdateAnimelistUseCase from './application/useCases/updateAnimelist.useCase';
import type {
  AnimelistUpdateResponse,
  ListStatus,
} from './domain/types/animelist';

@Controller('animelist')
export class AnimelistController {
  constructor(
    private readonly getAnimelistUserCase: GetAnimelistUseCase,
    private readonly updateAnimelistUserCase: UpdateAnimelistUseCase,
  ) {}

  @Get()
  async getAnimelist() {
    return await this.getAnimelistUserCase.execute();
  }

  @Patch('/:animeId')
  async updateAnimelist(
    @Param('animeId') animeId: string,
    @Body() animeData: ListStatus,
  ): Promise<AnimelistUpdateResponse> {
    if (!animeId || !animeData) {
      return {
        data: null,
        status: 500,
        message: 'Anime ID or anime data is missing',
      };
    }

    return await this.updateAnimelistUserCase.execute(animeId, animeData);
  }
}
