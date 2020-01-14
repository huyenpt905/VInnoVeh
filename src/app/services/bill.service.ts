import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserService } from "./user.service";
import { BillModel, Data } from "../models/bill.model";
import { Observable } from "rxjs";

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
export class BillService {
  private API = "http://35.220.185.112:2234/api";

  constructor(private http: HttpClient, private userService: UserService) {}

  getAll(): Observable<Data> {
    return this.http.get<Data>(
      `${this.API}/bills/all/${this.userService.tenantID}`,
      httpOptions
    );
  }

  getNotCompleteBill(): Observable<BillModel> {
    return this.http.get<BillModel>(
      `${this.API}/bills/notcomplete/${this.userService.tenantID}`,
      httpOptions
    );
  }

  getCompleteBill(): Observable<BillModel> {
    return this.http.get<BillModel>(
      `${this.API}/bills/complete/${this.userService.tenantID}`,
      httpOptions
    );
  }

  // updateBill(data: BillModel): Observable<BillModel> {
  //   return this.http.put<BillModel>(`${this.API}/bills`, data, httpOptions);
  // }

  addBill(data: BillModel): Observable<BillModel> {
    return this.http.post<BillModel>(
      `${this.API}/bill/local`,
      data,
      httpOptions
    );
  }

  addBillLocal(data: BillModel): Observable<BillModel> {
    return this.http.post<BillModel>(
      `${this.API}/bills/locals`,
      data,
      httpOptions
    );
  }

  //checkout a bill: GET("/api/bills/checkout/:billID/:nowKM")
  checkout(billID: number, nowKM: number) {
    return this.http.get(`${this.API}/bill/checkout/${billID}/${nowKM}`, httpOptions);
  }

  //edit prepay : PUT("/api/bills/prepay/:billid/:money")

  //delete bill: DELETE("/api/bills/:bildID")
}
