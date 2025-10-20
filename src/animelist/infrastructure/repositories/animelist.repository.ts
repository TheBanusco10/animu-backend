import AnimelistInterface from '@/animelist/domain/interfaces/animelist.interface';
import { Animelist } from '@/animelist/domain/types/animelist';

export default class AnimelistRepository implements AnimelistInterface {
  getAnimelist(): Promise<Animelist> {
    throw new Error('Method not implemented.');
  }
}
