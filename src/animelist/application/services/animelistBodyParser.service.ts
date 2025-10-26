import { Injectable } from '@nestjs/common';

@Injectable()
export default class AnimelistBodyParser {
  parseToFormUrlEncoded(body: Record<string, any>) {
    const formData = new URLSearchParams();

    Object.entries(body).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    return formData;
  }
}
