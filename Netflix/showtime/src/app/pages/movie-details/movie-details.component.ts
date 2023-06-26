import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  constructor(private service:MovieApiServiceService,private router:ActivatedRoute){

  }
  getMovieDetailResult:any;
  getMovieVideoResult:any;
  getMovieCastResult:any;
  ngOnInit(): void {
    let getparamId=this.router.snapshot.paramMap.get('id');
    console.log(getparamId,'getparamId##');

    this.getMovie(getparamId);
    this.getVideo(getparamId);
    this.getMovieCast(getparamId);
  }
  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((res)=>{
      console.log(res,'getmoviedetails##');
      this.getMovieDetailResult=res;

    })
  }
  getVideo(id:any){
    this.service.getMovieVideo(id).subscribe((res)=>{
      console.log(res,'getmovievideo##');
      res.results.forEach((e:any) => {
        if(e.type=='Trailer'){
          this.getMovieVideoResult=e.key;
        }
      });


    })
  }
  getMovieCast(id:any){
    this.service.getMovieCast(id).subscribe((res)=>{
      console.log(res,'moviecast##');
      this.getMovieCastResult=res.cast;
    })
  }

}
