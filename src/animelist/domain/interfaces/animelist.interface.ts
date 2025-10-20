import { Animelist } from '@/animelist/domain/types/animelist';

export default interface AnimelistInterface {
  getAnimelist(): Promise<Animelist>;
}
