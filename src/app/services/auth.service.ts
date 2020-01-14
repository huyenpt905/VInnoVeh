import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { parseHostBindings } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MywiVHlwZXMiOiJjdXN0b21lciIsImV4cCI6MTU4MDcwNTYzNn0.160AMdZO6gc7ZXaQhNuelS7935lKy6ZVj_34KTh9ePs'
  })
};

  interface AuthResponeData {
    kind: string;
    idToken: string;
    phoneNumber: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
  }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API = "http://35.220.185.112:2234/api";

  constructor(private http: HttpClient) { }

  signup(phoneNumber: string, password: string) {
    return this.http.post<AuthResponeData>(`${this.API}/customer`, {
      Phone: phoneNumber,
      Password: password,
      returnSecureToken: true
    });
  }
}
  // login(phoneNumber: string, password: string) {
  //   return this.http.get(`${this.API}/login`,);
  // }
