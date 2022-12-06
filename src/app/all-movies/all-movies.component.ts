import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../classes/movie';
@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})

export class AllMoviesComponent implements OnInit {
  movies: Movie[] | any;
  constructor(private movieService: MovieService) { }
  orderBy : string ='by-publication-date';
  isCritic : string ='';
  searchName :string ='' ;
  ngOnInit(): void {
    this.movieService.getAllMovies(this.orderBy,this.isCritic).subscribe(result => {
      this.movies = result.results;
      this.movies.forEach(function(movie :any){
        if(movie.multimedia != null){
          movie.imgSrc=movie.multimedia.src
        }else{
          movie.imgSrc='https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png'
        }
        movie.reviewLink = movie.link.url
      });
    });
  }
  orderByChange(){
    this.movieService.getAllMovies(this.orderBy,this.isCritic).subscribe(result => {
      this.movies = result.results;
      console.log('this.movies',this.movies)
      this.movies.forEach(function(movie :any){
        if(movie.multimedia != null){
          movie.imgSrc=movie.multimedia.src
        }else{
          movie.imgSrc='https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png'
        }
        if(movie.link != null){
          movie.reviewLink = movie.link.url
        }else{
          movie.reviewLink = "#"
        }
      });
    });
  }
  isCriticChange(){
    console.log('this.isCritic',this.isCritic)
    if(this.isCritic == 'critics-pick=Y&'){
      this.isCritic = '';
    }else{
      this.isCritic = 'critics-pick=Y&';
    } 
    // just to get values with the new params
    this.orderByChange();
  }
  searchNameChange(){
    this.movieService.searchMovie(this.searchName,this.isCritic,this.orderBy).subscribe(result => {
      this.movies = result.results;
      this.movies.forEach(function(movie :any){
        if(movie.multimedia != null){
          movie.imgSrc=movie.multimedia.src
        }else{
          movie.imgSrc='https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png'
        }
        movie.reviewLink = movie.link.url
      });
    });
  }
  
}
