import { Injectable } from '@angular/core';
import { VehicleModel} from '../models/vehicle.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import { UserService } from './user.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private API  = 'http://35.220.185.112:2234/api';


  constructor( private http: HttpClient, private userService: UserService ) { }

  getAll(): Observable<VehicleModel[]> {
    return this.http.get<VehicleModel[]>(`${this.API}/cars/available/${this.userService.tenantID}`);
  }

  getVehicleById(idVeh: string): Observable<VehicleModel> {
    return this.http.get<VehicleModel>(`${this.API}/car/${idVeh}`);
  }

  updateVehicle(data: VehicleModel): Observable<VehicleModel> {
    return this.http.put<VehicleModel>(`${this.API}/car`, data);
  }

  addVehicle(data: VehicleModel): Observable<VehicleModel> {
    return this.http.post<VehicleModel>(`${this.API}/car`, data);
  }

}
