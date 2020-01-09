import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {
  vehAddInput = this.fb.group({
    LPC: ['', Validators.required],
    TenantID: ['', Validators.required],
    Color: [''],
    Lable: [''],
    KindOf: ['', Validators.required],
    CurrentKM: [''],
    PricePerDay: [''],
    PricePerKm: ['']
  });
  constructor(
    private vehicleService: VehicleService,  
    private fb: FormBuilder) { }

  ngOnInit() {

  }

  addVehicle() {
    this.vehicleService.addVehicle(this.vehAddInput.value).subscribe(
      function() {
        // alert('Thêm thành công');
        this.router.navigate([" '/tenant/vehicles-list' "]);
      }
    )
  console.log(this.vehAddInput.value);
  }
}
