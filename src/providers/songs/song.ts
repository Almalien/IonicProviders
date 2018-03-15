import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Http, Response} from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


/*
  Generated class for the SongProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SongProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SongProvider Provider');
  }

  getSongs() {

    return this.http.get("http://10.16.0.118:8080/v1/songs")
            .map(response  => response)
            .catch(error => error);
}

}
