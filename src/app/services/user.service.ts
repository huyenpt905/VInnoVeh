import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

const API = 'http://35.220.185.112:2234/api/cars';
// http://35.220.185.112:2234/api/cars/all
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient ) { }

  getUsers() {
    // return this.http.get(`${API}all`);
  }

  // getUserById( id: string ) {
  //
  // }
}
