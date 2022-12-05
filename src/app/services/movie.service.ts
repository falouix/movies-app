import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../classes/movie';
import { environment } from 'src/environments/environment';
export type ApiResponse = {
  Response: string;
  Search: Movie[];
  totalResults: string;
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiURL = environment.api_url;
  apiKEY = environment.api_key;
  constructor(private httpClient: HttpClient) { }
  searchMovie(name: string) {
    return this.httpClient.get<any>(`${this.apiURL}search.json?query=godfather&api-key=${this.apiKEY}`);
  }
}
