import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('spotify service ready')
  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`

    const HEADERS = new HttpHeaders({
      'Authorization': 'Bearer BQAwxzJpdf2wPcyElHJorRzEm_QxqGapjG26b5Hb1XcujswSVWsFh2NSPD48x09dcuhwzFOiHG3IFGFHxaSQKfl7nK8ziOhk2FgCzmIRJYkKHfl6W0oaUzT0J-aoVW08I_5EvmoXRnTuplafmZUDPtRVWB160N_H6xWYZg'
    });

    return this.http.get(url, { headers: HEADERS });
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map  ( data => {
                  return data['albums'].items;
              }) );
  }

  getArtists(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
              .pipe(
                map ( data => {
                  return data['artists'].items;
                })
              )
  }

  getArtist(id:string){
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=US`)
    .pipe(
      map ( data => {
        return data['tracks'];
      })
    )
  }

}
