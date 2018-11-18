import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino:string){
    console.log(termino);
    this.spotify.getArtists(termino)
          .subscribe( data => this.artists = data);
  }

}
