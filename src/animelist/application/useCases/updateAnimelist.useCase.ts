import { Injectable } from '@nestjs/common';
import type AnimelistInterface from '../../domain/interfaces/animelist.interface';
import { ANIMELIST_REPOSITORY } from '@/animelist/application/tokens/animelist.token';
import { Inject } from '@nestjs/common';
import { ListStatus } from '@/animelist/domain/types/animelist';
import AnimelistBodyParser from '../services/animelistBodyParser.service';

@Injectable()
export default class UpdateAnimelistUseCase {
  constructor(
    @Inject(ANIMELIST_REPOSITORY)
    private readonly animelistRepository: AnimelistInterface,
    private readonly animelistBodyParser: AnimelistBodyParser,
  ) {}

  async execute(animeId: string, animeData: ListStatus) {
    const formDataValues =
      this.animelistBodyParser.parseToFormUrlEncoded(animeData);

    return await this.animelistRepository.updateAnimelist(
      animeId,
      formDataValues,
    );
  }
}
