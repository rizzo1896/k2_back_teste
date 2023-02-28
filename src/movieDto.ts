import { IMovie, MovieType } from './types';

export class MovieDto implements MovieType {
  constructor(movie: IMovie) {
    this.Title = movie.Title;
    this.Poster = movie.Poster;
    this.Plot = movie.Plot;
    this.Actors = movie.Actors;
    this.Metascore = movie.Metascore;
  }

  Title: string;
  Poster: string;
  Plot: string;
  Actors: string;
  Metascore: string;

  getMovie(): MovieType {
    return {
      Title: this.Title,
      Poster: this.Poster,
      Plot: this.Plot,
      Actors: this.Actors,
      Metascore: this.Metascore,
    };
  }
}
