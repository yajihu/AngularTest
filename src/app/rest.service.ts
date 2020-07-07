import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Songs } from './Songs'

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:3000/playlist"

  getSongs()
  {
      return this.http.get<Songs[]>(this.url);
  }
}
