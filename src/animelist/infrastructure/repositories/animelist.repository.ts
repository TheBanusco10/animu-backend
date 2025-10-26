import AnimelistInterface from '@/animelist/domain/interfaces/animelist.interface';
import {
  Animelist,
  AnimelistUpdateResponse,
  ListStatus,
} from '@/animelist/domain/types/animelist';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

const ANIMELIST_ENDPOINT =
  'https://api.myanimelist.net/v2/users/@me/animelist?fields=list_status&limit=4';

const ANIMELIST_UPDATE_ENDPOINT =
  'https://api.myanimelist.net/v2/anime/{anime_id}/my_list_status';

@Injectable()
export default class AnimelistRepository implements AnimelistInterface {
  constructor(private readonly httpService: HttpService) {}

  async getAnimelist(): Promise<Animelist> {
    const { data } = await firstValueFrom(
      this.httpService.get<Animelist>(ANIMELIST_ENDPOINT),
    );

    return data;
  }

  async updateAnimelist(
    animeId: string,
    formData: URLSearchParams,
  ): Promise<AnimelistUpdateResponse> {
    const { data, status } = await firstValueFrom(
      this.httpService.patch<ListStatus>(
        ANIMELIST_UPDATE_ENDPOINT.replace('{anime_id}', animeId),
        formData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      ),
    );

    if (status !== 200) {
      return {
        data: null,
        status,
        message: 'Failed to update anime list',
      };
    }

    return {
      data,
      status,
    };
  }
}
