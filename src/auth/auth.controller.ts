import { Body, Controller, Get, Post } from '@nestjs/common';
import GetAuthorizeUriUseCase from '@/auth/application/useCases/getAuthorizeUri.useCase';
import CreateAuthToken from '@/auth/application/useCases/createAuthToken.useCase';
import { AuthTokenResponse } from '@/auth/domain/types/authToken';

@Controller('auth')
export class AuthController {
  constructor(
    private getAuthorizeUriUseCase: GetAuthorizeUriUseCase,
    private createAuthTokenUseCase: CreateAuthToken,
  ) {}

  @Get('uri')
  async getAuthorizeUri(): Promise<string> {
    return await this.getAuthorizeUriUseCase.execute();
  }

  @Post('create-token')
  async createAuthToken(
    @Body() body: { code: string },
  ): Promise<AuthTokenResponse> {
    if (!body.code)
      return {
        data: null,
        status: 400,
        message: 'Code is required',
      };

    return await this.createAuthTokenUseCase.execute(body.code);
  }
}
