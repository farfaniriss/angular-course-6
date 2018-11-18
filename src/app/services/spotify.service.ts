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
      'Authorization': 'Bearer BQA4lR_AjbpzVNIMaOfYJ6eoZHHR-9yEyykG1WCwTlcDTlBL-VuDCuNcDbGzOrj49cgAJefPirExyK2ekrMMx90AT-UC16xxzDKONa_Ukc2AMr3lX1ZL6i-W7A-crCCCcvTsbFgN_U4T0JIXCdHcjvMqTRMnPiCSWRujjQ'
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
}
