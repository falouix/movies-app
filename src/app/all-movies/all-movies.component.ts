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
  
  ngOnInit(): void {
    this.movieService.searchMovie('Batman').subscribe(result => {
      this.movies = result.results;
      this.movies.forEach(function(movie :any){
        // 👇️ name Tom 0, country Chile 1
        console.log( movie);
        if(movie.multimedia != null){
          movie.imgSrc=movie.multimedia.src
        }else{
          movie.imgSrc='https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png'
        }
      });
      console.log('search result : ',this.movies)
    });
  }
  
}
