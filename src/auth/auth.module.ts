import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import GetAuthorizeUriUseCase from './application/useCases/getAuthorizeUri.useCase';
import { AUTH_REPOSITORY } from './application/tokens/auth.token';
import MyAnimeListAuthRepository from './infrastructure/repositories/auth.myanimelist.repository';
import CreateAuthToken from './application/useCases/createAuthToken.useCase';
import AuthConfig from './application/services/authConfig.service';

@Module({
  controllers: [AuthController],
  providers: [
    GetAuthorizeUriUseCase,
    {
      provide: AUTH_REPOSITORY,
      useClass: MyAnimeListAuthRepository,
    },
    CreateAuthToken,
    {
      provide: AUTH_REPOSITORY,
      useClass: MyAnimeListAuthRepository,
    },
    AuthConfig,
  ],
})
export class AuthModule {}
