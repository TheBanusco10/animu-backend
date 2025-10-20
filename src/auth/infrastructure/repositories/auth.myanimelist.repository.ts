import AuthConfig from '@/auth/application/services/authConfig.service';
import AuthInterface from '@/auth/domain/interfaces/auth.interface';
import { AuthTokenResponse } from '@/auth/domain/types/authToken';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class MyAnimeListAuthRepository implements AuthInterface {
  private readonly CLIENT_SECRET: string;
  private readonly CLIENT_ID: string;
  private readonly CODE_CHALLENGE: string;
  private readonly AUTHORIZE_URI: string;
  private readonly TOKEN_ENDPOINT: string;

  constructor(private authConfig: AuthConfig) {
    this.CLIENT_SECRET = this.authConfig.CLIENT_SECRET;
    this.CLIENT_ID = this.authConfig.CLIENT_ID;
    this.CODE_CHALLENGE = this.authConfig.CODE_CHALLENGE;
    this.AUTHORIZE_URI = `${this.authConfig.OAUTH_BASE_ENDPOINT}/authorize?`;
    this.TOKEN_ENDPOINT = `${this.authConfig.OAUTH_BASE_ENDPOINT}/token`;
  }

  async getAuthorizeUri(): Promise<string> {
    return Promise.resolve(
      `${this.AUTHORIZE_URI}response_type=code&client_id=${this.CLIENT_ID}&code_challenge=${this.CODE_CHALLENGE}&code_challenge_method=plain`,
    );
  }

  async createAuthToken(code: string): Promise<AuthTokenResponse> {
    const response = await fetch(this.TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: this.CLIENT_ID,
        grant_type: 'authorization_code',
        code,
        code_verifier: this.CODE_CHALLENGE,
        client_secret: this.CLIENT_SECRET,
      }),
    });

    if (!response.ok) {
      return {
        data: null,
        status: 500,
        message: 'An unknown error occurred',
      };
    }

    return {
      data: await response.json(),
      status: 201,
    };
  }
}
