import { Injectable } from '@nestjs/common';
import type AnimelistInterface from '../../domain/interfaces/animelist.interface';
import { ANIMELIST_REPOSITORY } from '@/animelist/application/tokens/animelist.token';
import { Inject } from '@nestjs/common';

@Injectable()
export default class GetAnimelistUseCase {
  constructor(
    @Inject(ANIMELIST_REPOSITORY)
    private readonly animelistRepository: AnimelistInterface,
  ) {}

  async execute() {
    return await this.animelistRepository.getAnimelist();
  }
}
