import {
  Animelist,
  AnimelistUpdateResponse,
} from '@/animelist/domain/types/animelist';

export default interface AnimelistInterface {
  getAnimelist(offset?: number): Promise<Animelist>;
  updateAnimelist(animeId: string, data: any): Promise<AnimelistUpdateResponse>;
}
