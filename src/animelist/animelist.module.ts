import { Module } from '@nestjs/common';
import { AnimelistController } from './animelist.controller';

@Module({
  controllers: [AnimelistController],
})
export class AnimelistModule {}
