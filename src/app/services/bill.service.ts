import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { BillModel } from '../models/bill.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  private API  = 'http://35.220.185.112:2234/api';

  constructor(private http: HttpClient, private userService: UserService) { }

  getAll(): Observable<BillModel[]> {
    return this.http.get<BillModel[]>(`${this.API}/bills/all/${this.userService.tenantID}`);
  }

  getNotCompleteBill(idVeh: string): Observable<BillModel> {
    return this.http.get<BillModel>(`${this.API}/car/${idVeh}`);
  }

  getCompleteBill(idVeh: string): Observable<BillModel> {
    return this.http.get<BillModel>(`${this.API}/car/${idVeh}`);
  }

  updateBill(data: BillModel): Observable<BillModel> {
    return this.http.put<BillModel>(`${this.API}/bills`, data);
  }

  addBill(data: BillModel): Observable<BillModel> {
    return this.http.post<BillModel>(`${this.API}/bills`, data);
  }

  //checkout a bill: GET("/api/bills/checkout/:billID/:nowKM") 

  //edit prepay : PUT("/api/bills/prepay/:billid/:money") 

  //delete bill: DELETE("/api/bills/:bildID")

}
