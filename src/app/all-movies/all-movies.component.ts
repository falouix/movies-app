import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../classes/movie';
@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})

export class AllMoviesComponent implements OnInit {
  movies: Movie[] | undefined;
  constructor(private movieService: MovieService) { }
  
  ngOnInit(): void {
    this.movieService.searchMovie('Batman').subscribe(result => {
      
      console.log('search result : ',result)
    });
  }
  
}
