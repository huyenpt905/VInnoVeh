import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

const API = 'http://35.220.185.112:2234/api/cars';

@Injectable({
  providedIn: 'root'
})
export class UserService {
public tenantID: number = 1;
  constructor( private http: HttpClient ) { }

//viet log in xong gan vao tenatID

  getUsers() {
    // return this.http.get(`${API}all`);
  }


}
