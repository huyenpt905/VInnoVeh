import {Component, OnInit} from '@angular/core';
import { VehicleModel } from '../../../models/vehicle.model';
import { VehicleService} from '../../../services/vehicle.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import {HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-vehicles-list-detail',
  templateUrl: './vehicles-list-detail.component.html',
  styleUrls: ['./vehicles-list-detail.component.scss']
})
export class VehiclesListDetailComponent implements OnInit {
  idVeh = '';

  vehInput = this.fb.group({
    ID: [''],
    LPC: [''],
    TenantID: [''],
    Color: [''],
    Lable: [''],
    KindOf: [''],
    CurrentKM: [''],
    PricePerDay: [''],
    PricePerKm: [''],
    CarStatus: ['']
  });
   constructor(
     private router: Router,
     private activatedRoute: ActivatedRoute,
     private vehicleService: VehicleService,
     private fb: FormBuilder
   ) { }

  ngOnInit() {
     this.idVeh = this.activatedRoute.snapshot.paramMap.get('idVeh');
     this.vehicleService.getVehicleById(this.idVeh).subscribe(veh => {
      //  console.log(veh);
       this.vehInput.setValue(veh);
     });
  }

  onUpdateInfoVehicle() {
    this.vehicleService.updateVehicle(this.vehInput.value).subscribe(
      function() {
        alert("Cập nhật thành công");
      }
    );
    // console.log(this.vehInput.value);
  }
}
