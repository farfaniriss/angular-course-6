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

  constructor(private spotify: SpotifyService) {
    // this.http.get('https://restcountries.eu/rest/v2/lang/es')
    // .subscribe( (resp:any) => {
    //   this.paises = resp;
    //   console.log(resp);
    // })
    this.spotify.getNewReleases()
      .subscribe((data: any) => {
          console.log(data);
          this.newRealeases = data;
      })

   } 

  ngOnInit() {
  }

}
