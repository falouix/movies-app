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
  searchMovie(name: string,isCritic:string ,orderBy:string) {
    return this.httpClient.get<any>(`${this.apiURL}search.json?${isCritic}query=${name}&api-key=${this.apiKEY}&order=${orderBy}`);
  }
  getAllMovies(orderBy : string,isCritic:string | null) {
    if(!orderBy){
      return this.httpClient.get<any>(`${this.apiURL}all.json?${isCritic}api-key=${this.apiKEY}`);
    }else{
      return this.httpClient.get<any>(`${this.apiURL}all.json?${isCritic}order=${orderBy}&api-key=${this.apiKEY}`);
    }
  }
  getPicksMovies(orderBy=null,isCritic=null) {
    if(!orderBy){
      return this.httpClient.get<any>(`${this.apiURL}picks.json?${isCritic}api-key=${this.apiKEY}`);
    }else{
      return this.httpClient.get<any>(`${this.apiURL}picks.json?${isCritic}order=${orderBy}&api-key=${this.apiKEY}`);
    }
  }
}
