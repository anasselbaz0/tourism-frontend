import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { City } from './model/city/city';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  getCities() {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*');
    const url = 'http://localhost:8080/cities';
    return this.http.get<City[]>(url, {headers});
  }

}
