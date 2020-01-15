import { Component, OnInit } from "@angular/core";
import { BillModel } from "src/app/models/bill.model";
import { BillService } from "src/app/services/bill.service";

@Component({
  selector: "app-all-bill",
  templateUrl: "./all-bill.component.html",
  styleUrls: ["./all-bill.component.scss"]
})
export class AllBillComponent implements OnInit {
  bills: BillModel[];
  isCheckout: boolean;
  constructor(private billService: BillService) {}

  ngOnInit() {
    this.billService.getAll().subscribe(data => {
      this.bills = data["Data"];
      // this.isCheckout = this.bills.Completed;
      console.log(data);
    });
  }
}
