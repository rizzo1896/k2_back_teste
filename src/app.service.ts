import { AxiosResponse } from './../node_modules/axios/index.d';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { IMovie, MovieType } from './types';
import { MovieDto } from './movieDto';

@Injectable()
export class AppService {
  private readonly baseUrl = 'http://www.omdbapi.com/';
  async getMovie(movieName: string): Promise<MovieType> {
    try {
      const response: AxiosResponse<IMovie, any> = await axios.get(
        `${this.baseUrl}/?t=${movieName}&apikey=867bf2f9`,
      );
      const movieDto = new MovieDto(response.data);
      return movieDto.getMovie();
    } catch (error) {
      throw error;
    }
  }
}
