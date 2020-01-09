import { Component, OnInit } from '@angular/core';
import { VehicleModel } from '../../../models/vehicle.model';
import { VehicleService} from '../../../services/vehicle.service';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.scss']
})
export class VehiclesListComponent implements OnInit {
  vehicles: VehicleModel[];

  constructor( private vehicleService: VehicleService ) { }

  ngOnInit() {
    this.vehicleService.getAll().subscribe( (data: VehicleModel[]) => {
      // console.log(data);
      return this.vehicles = data;
    });

    
  }
}
