import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/services/vehicle.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {
  selectedFile: File = null;
  imagePreview;

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
    private http: HttpClient,
    private userService: UserService,
    private router: Router,
    private vehicleService: VehicleService,  
    private fb: FormBuilder) { }

  ngOnInit() {

  }

  imgInput;

  addVehicle() {
    let data = this.vehAddInput.value;
    data.PricePerDay = parseInt(data.PricePerDay, 10);
    data.PricePerKm = parseInt(data.PricePerKm);
    data.TenantID = parseInt(data.TenantID);
    data.CurrentKM = parseInt(data.CurrentKM);
    this.vehicleService.addVehicle(data).subscribe(
      function() {
        alert('Thêm thành công');
        // this.vehAddInput.reset(this.vehAddInput.value);
        // this.router.navigate(["''"]);
      }
    )
    let imgData = {
      // imgName: this.,
      img: this.imgInput
    }
    this.vehicleService.addImage(imgData).subscribe();
    
  }
  // onFileSelected(data){
  //   // console.log("data", data)
  // }

  onFileSelected(data) {
    this.imgInput = data;

    this.selectedFile = <File>data[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(this.selectedFile);
  }

  // onUploadImage() {
  //   const fd = new FormData();
  //   fd.append('image', this.selectedFile, this.selectedFile.name);
  //   this.http.post(`${this.API}/images`, fd, {
  //     reportProgress: true,
  //     observe: 'events'
  //   }).subscribe(res => console.log(res));
  // }


}
