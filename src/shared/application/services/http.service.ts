import { HttpService } from '@nestjs/axios';
import { Injectable, Scope, Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';

@Injectable({ scope: Scope.REQUEST })
export class CustomHttpService extends HttpService {
  constructor(@Inject(REQUEST) protected readonly req: any) {
    super();

    this.axiosRef.interceptors.request.use((config) => {
      // Forward Bearer token from frontend request
      const authHeader = this.req?.headers?.authorization;
      if (authHeader) {
        config.headers = config.headers || {};
        config.headers['Authorization'] = authHeader;
      }

      return config;
    });
  }
}
