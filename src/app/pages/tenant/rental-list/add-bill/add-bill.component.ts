import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { BillService } from "src/app/services/bill.service";
import { parseTemplate } from '@angular/compiler';

@Component({
  selector: "app-add-bill",
  templateUrl: "./add-bill.component.html",
  styleUrls: ["./add-bill.component.scss"]
})
export class AddBillComponent implements OnInit {
  addBillForm = this.fb.group({
    TenantID: ['', Validators.required],
    CustomerPhone: ['', Validators.required],
    CarID: ['', Validators.required],
    StartTime: ['', Validators.required],
    StopTime: ['', Validators.required],
    Prepay: ['', Validators.required],
    Firstname: ['', Validators.required],
    Lastname: ['', Validators.required]
  });

  constructor(private billService: BillService, private fb: FormBuilder) {}

  ngOnInit() {}

  addBill() {
    function toTimestamp(strDate){
      var datum = Date.parse(strDate);
      return datum/1000;
     }
   let data = this.addBillForm.value;
   data.StartTime = toTimestamp(data.StartTime);
   data.StopTime = toTimestamp(data.StopTime);
   data.Prepay = parseInt(data.Prepay);
   data.CarID = parseInt(data.CarID);
   data.TenantID = parseInt(data.TenantID);

   this.billService.addBill(this.addBillForm.value).subscribe(
     function() {
       alert("them thành công");
     }
   );
    // console.log(data);
  }

 
}
