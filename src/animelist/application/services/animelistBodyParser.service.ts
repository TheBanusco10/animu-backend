import { Injectable } from '@nestjs/common';

@Injectable()
export default class AnimelistBodyParser {
  parseToFormUrlEncoded(body: Record<string, any>) {
    return new URLSearchParams(body).toString();
  }
}
