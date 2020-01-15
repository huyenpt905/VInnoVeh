import { Injectable } from "@angular/core";
import { VehicleModel } from "../models/vehicle.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { UserService } from "./user.service";
import { FormsModule, FormBuilder } from "@angular/forms";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json",
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MywiVHlwZXMiOiJjdXN0b21lciIsImV4cCI6MTU4MDcwNTYzNn0.160AMdZO6gc7ZXaQhNuelS7935lKy6ZVj_34KTh9ePs"
  })
};

@Injectable({
  providedIn: "root"
})
export class VehicleService {
  private API = "http://35.220.185.112:2234/api";

  constructor(private http: HttpClient, private userService: UserService) {}

  getAll(): Observable<VehicleModel[]> {
    return this.http.get<VehicleModel[]>(
      `${this.API}/cars/tenant/${this.userService.tenantID}`,
      httpOptions
    );
  }

  getVehicleById(idVeh: string): Observable<VehicleModel> {
    return this.http.get<VehicleModel>(`${this.API}/car/${idVeh}`, httpOptions);
  }

  updateVehicle(data: VehicleModel): Observable<VehicleModel> {
    return this.http.put<VehicleModel>(`${this.API}/car`, data, httpOptions);
  }

  addVehicle(data: VehicleModel): Observable<VehicleModel> {
    return this.http.post<VehicleModel>(`${this.API}/car`, data, httpOptions);
  }

  addImage(data) {
    return this.http.post(`${this.API}/images`, data, httpOptions);
  }
}
