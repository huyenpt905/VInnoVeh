import { Component, OnInit } from '@angular/core';
// import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.scss']
})
export class TenantComponent implements OnInit {
  // tenants: any = [];
  constructor() { }

  ngOnInit() {
    // this.tenantService.getTenant().subscribe(data => {
    //   console.log(data);
    //   this.tenants = data;
    // });
  }

}
