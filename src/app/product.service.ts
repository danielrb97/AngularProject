import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  private _albumUrl='../assets/album.json';

  getAlbum(id: number){
    console.log(this._http.get(this._albumUrl))
      return this._http.get(this._albumUrl).map(response => <Album>response.json())
  }
}
 