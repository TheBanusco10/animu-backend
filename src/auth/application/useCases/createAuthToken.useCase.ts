import type AuthInterface from '@/auth/domain/interfaces/auth.interface';
import { Inject, Injectable } from '@nestjs/common';
import { AUTH_REPOSITORY } from '@/auth/application/tokens/auth.token';
import { AuthTokenResponse } from '@/auth/domain/types/authToken';

@Injectable()
export default class CreateAuthToken {
  constructor(
    @Inject(AUTH_REPOSITORY)
    private readonly authRepository: AuthInterface,
  ) {}

  async execute(code: string): Promise<AuthTokenResponse> {
    return await this.authRepository.createAuthToken(code);
  }
}
