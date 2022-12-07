import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Movie } from '../classes/movie';
@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})

export class AllMoviesComponent implements OnInit {
  currentLength : number | any ;
  less : any = false;
  movies: Movie[] | any;
  displayData: Movie[] | any;
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
      this.displayData = this.movies.slice(0, 10);
      console.log(this.displayData);
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
      
      this.displayData = this.movies.slice(0, 10);
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
      this.displayData = this.movies.slice(0, 10);
    });
  }
  showMore() {
    let newLength = this.displayData.length + 10;
    this.currentLength = newLength;
    if (newLength > this.movies.length) {
        newLength = this.movies.length
    }else{
      this.less = true
    }
     this.displayData = this.movies.slice(0, newLength);
  }
  showLess() {
    console.log(this.currentLength);
    let newLength = this.currentLength - 10;
    if (newLength > 10) {
        newLength = this.movies.length
    }else{
      this.less = false
    }
     this.displayData = this.movies.slice(0, newLength);
  }
}
