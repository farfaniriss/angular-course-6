import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //paises:any[] = [];

  newRealeases: any[] = [];
  loading:boolean;
  error:boolean = false;
  mensajeError:string;

  constructor(private spotify: SpotifyService) {
    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    // .subscribe( (resp:any) => {
    //   this.paises = resp;
    //   console.log(resp);
    // })

    this.loading = true;


    this.spotify.getNewReleases()
      .subscribe((data: any) => {
          console.log(data);
          this.newRealeases = data;
          this.loading = false;
      }, (error) => {
        this.error = true;
        this.loading = false;
        console.log(error.error.error.message)
        this.mensajeError = error.error.error.message;
      })
   }

  ngOnInit() {
  }

}
