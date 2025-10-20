import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export default class AuthConfig {
  constructor(private readonly configService: ConfigService) {}

  get CLIENT_ID(): string {
    return this.configService.get('CLIENT_ID') as string;
  }

  get CODE_CHALLENGE(): string {
    return this.configService.get('CODE_CHALLENGE') as string;
  }

  get CLIENT_SECRET(): string {
    return this.configService.get('CLIENT_SECRET') as string;
  }

  get OAUTH_BASE_ENDPOINT(): string {
    return 'https://myanimelist.net/v1/oauth2';
  }
}
