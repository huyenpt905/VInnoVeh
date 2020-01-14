import { Component, OnInit } from "@angular/core";
import { BillModel } from "src/app/models/bill.model";
import { BillService } from "src/app/services/bill.service";

@Component({
  selector: "app-not-complete-bill",
  templateUrl: "./not-complete-bill.component.html",
  styleUrls: ["./not-complete-bill.component.scss"]
})
export class NotCompleteBillComponent implements OnInit {
  bills: BillModel[];
  currentKM;
  eventValue: any;
  idBill: number;
  dataRes;
  isCheckout = false;
  constructor(private billService: BillService) {}

  ngOnInit() {
    this.billService.getNotCompleteBill().subscribe(data => {
      this.bills = data["Data"];
      // console.log(data);
    });
  }

  inputValueF(event: HTMLInputElement, id: number) {
    this.eventValue = parseInt(event.value);
    this.idBill = id;
  }

  checkoutThisBill() {
    this.billService.checkout(this.idBill, this.eventValue).subscribe(data => {
      this.dataRes = data["Data"];
    });
  }
}
