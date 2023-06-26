import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient ) { }
  baseurl="https://api.themoviedb.org/3";
  apikey="dfb6c0e170d6fd673c0be698b058823f";
  //bannerapidata
  bannerApiData():Observable<any>{
  return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }

  // trending movies
  trendingMovieApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)
  }
  // Searchmovie
  getSearchMovie(data:any):Observable<any>{
    console.log(data,"data#");

    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`)
  }
  // getMoviedata
  getMovieDetails(data:any):Observable<any>{

    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }
  // getMovieVideo
  getMovieVideo(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }

  getMovieCast(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }
  // action
  fetchActionMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=28`)
  }
  // adventure
  fetchAdventureMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=12`)
  }
  // animation
  fetchAnimationMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=16`)
  }
  // Comedy
  fetchComedyMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=35`)
  }
  //Documentry
  fetchDocumentryMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=99`)
  }
  //Science
  fetchScienceMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=878`)
  }
  //Thiriller
  fetchThirillerMovie():Observable<any>{
    return this.http.get(`${this.baseurl}/discover/movie?api_key=${this.apikey}&with_genres=53`)
  }

}
