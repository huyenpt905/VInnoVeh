import { Injectable } from '@angular/core';
import { VehicleModel} from '../models/vehicle.model';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private API  = 'http://35.220.185.112:2234/api/cars/';

  constructor( private http: HttpClient ) { }

  getAll(): Observable<VehicleModel[]> {
    return this.http.get<VehicleModel[]>(`${this.API}all`).pipe(
      tap(ok => console.log(  `ok = ${JSON.stringify(ok)}`)),
      catchError(error => {
        return of([]);
      })
    );
  }

  // export class ParkingService {
  // getParking(): Observable<Parking[]> {
  //   return this.http.get<Parking[]>(`${environment.apiUrl}`).pipe(
  //     tap(receviedParkings =>
  //       console.log(`receivedParkings = ${JSON.stringify(receviedParkings)}`)
  //     ),
  //     catchError(error => of([]))
  //   );
  // }
}
