import { Component,OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service:MovieApiServiceService){}
  bannerResult:any=[];
  trendingMovieResult:any=[];
  actionMovieResults:any=[];
  advantureMovieResults:any=[];
  animationMovieResults:any=[];
  comedyMovieResults:any=[];
  documentryMovieResults:any=[];
  scienceMovieResults:any=[];
  thrillerMovieResults:any=[];
  ngOnInit(): void {
   this.bannerData();
   this.trendingData();
   this.actionMovie();
   this.adventureMovie();
   this.animatonMovie();
   this.comedyMovie();
   this.documentryMovie();
   this.scienceMovie();
   this.thrillerMovie();
  }
  bannerData(){
    this.service.bannerApiData().subscribe((res)=>{
      console.log(res,'bannerresult#');
      this.bannerResult=res.results;

    })
  }
  trendingData(){
    this.service.trendingMovieApiData().subscribe((res)=>{
      console.log(res,'trendingresult#');
      this.trendingMovieResult=res.results;
    });
  }
  actionMovie(){
    this.service.fetchActionMovie().subscribe((res)=>{
      console.log(res,'actionMovieresult#');
      this.actionMovieResults=res.results;
    });
  }
  adventureMovie(){
    this.service.fetchAdventureMovie().subscribe((res)=>{
      console.log(res,'advantureMovieresult#');
      this.advantureMovieResults=res.results;
    });
  }
  animatonMovie(){
    this.service.fetchAnimationMovie().subscribe((res)=>{

      this.animationMovieResults=res.results;
    });
  }
  comedyMovie(){
    this.service.fetchComedyMovie().subscribe((res)=>{

      this.comedyMovieResults=res.results;
    });
  }
  documentryMovie(){
    this.service.fetchDocumentryMovie().subscribe((res)=>{

      this.documentryMovieResults=res.results;
    });
  }
  scienceMovie(){
    this.service.fetchScienceMovie().subscribe((res)=>{

      this.scienceMovieResults=res.results;
    });
  }
  thrillerMovie(){
    this.service.fetchThirillerMovie().subscribe((res)=>{

      this.thrillerMovieResults=res.results;
    });
  }

}
