import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { CustomHttpService } from './application/services/http.service';

@Module({
  imports: [HttpModule],
  providers: [
    {
      provide: HttpService, // Override default HttpService
      useClass: CustomHttpService,
    },
  ],
  exports: [HttpService],
})
export class SharedModule {}
