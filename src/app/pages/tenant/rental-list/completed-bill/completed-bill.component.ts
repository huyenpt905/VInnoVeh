import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/services/bill.service';
import { BillModel } from 'src/app/models/bill.model';

@Component({
  selector: 'app-completed-bill',
  templateUrl: './completed-bill.component.html',
  styleUrls: ['./completed-bill.component.scss']
})
export class CompletedBillComponent implements OnInit {
  bills: BillModel[];

  constructor(private billService: BillService) {}

  ngOnInit() {
    this.billService.getCompleteBill().subscribe(data => {
      this.bills = data["Data"];
      console.log(data);
    });
  }
}
