import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { MovieType } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':movieName')
  getMovie(@Param('movieName') movieName: string): Promise<MovieType> {
    return this.appService.getMovie(movieName);
  }
}
