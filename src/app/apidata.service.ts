import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(
    private http: HttpClient
  ) { }

  getApiData() {
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'responseType': 'json'
    });
      this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    })
  }
}
