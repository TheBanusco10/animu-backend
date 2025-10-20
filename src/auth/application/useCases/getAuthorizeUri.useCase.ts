import type AuthInterface from '@/auth/domain/interfaces/auth.interface';
import { Inject, Injectable } from '@nestjs/common';
import { AUTH_REPOSITORY } from '@/auth/application/tokens/auth.token';

@Injectable()
export default class GetAuthorizeUriUseCase {
  constructor(
    @Inject(AUTH_REPOSITORY)
    private readonly authRepository: AuthInterface,
  ) {}

  async execute(): Promise<string> {
    try {
      return await this.authRepository.getAuthorizeUri();
    } catch (error: any) {
      // TODO Return object with data and status to check in frontend
      if (error instanceof Error) return error.message;

      return 'An unknown error occurred';
    }
  }
}
