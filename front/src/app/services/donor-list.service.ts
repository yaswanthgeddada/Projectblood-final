import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonorListService {
  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'Content-type': 'application/json'
  })
  // getDonors() {
  //   return this.http.get('http://localhost:3000/api/doner');
  // }

  getDonors() {
    return this.http.get('http://localhost:3000/api/doner');
  }



  addDonor(donor){
    return this.http.post('http://localhost:3000/api/doners', donor);
  }
  getSearch(id) {
    return this.http.get('http://localhost:3000/api/doner/search?search='+id);
  }

}
