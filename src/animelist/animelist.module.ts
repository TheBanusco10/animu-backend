import { Module } from '@nestjs/common';
import { AnimelistController } from './animelist.controller';
import { ANIMELIST_REPOSITORY } from './application/tokens/animelist.token';
import AnimelistRepository from './infrastructure/repositories/animelist.repository';
import GetAnimelistUseCase from './application/useCases/getAnimelist.useCase';
import { SharedModule } from '@/shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [AnimelistController],
  providers: [
    GetAnimelistUseCase,
    {
      provide: ANIMELIST_REPOSITORY,
      useClass: AnimelistRepository,
    },
  ],
})
export class AnimelistModule {}
