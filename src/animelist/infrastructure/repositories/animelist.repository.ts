import AnimelistInterface from '@/animelist/domain/interfaces/animelist.interface';
import { Animelist } from '@/animelist/domain/types/animelist';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

const ANIMELIST_ENDPOINT =
  'https://api.myanimelist.net/v2/users/@me/animelist?fields=list_status&limit=4';

@Injectable()
export default class AnimelistRepository implements AnimelistInterface {
  constructor(private readonly httpService: HttpService) {}

  async getAnimelist(): Promise<Animelist> {
    const { data } = await firstValueFrom(
      this.httpService.get<Animelist>(ANIMELIST_ENDPOINT),
    );

    return data;
  }
}
