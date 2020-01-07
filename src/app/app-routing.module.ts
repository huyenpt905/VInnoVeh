import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Tenant
import {TenantComponent} from './pages/tenant/tenant.component';
import {VehiclesListComponent} from './pages/tenant/vehicles-list/vehicles-list.component';
import {VehiclesListDetailComponent} from './pages/tenant/vehicles-list-detail/vehicles-list-detail.component';
import {DetailvehicleComponent} from './pages/user/detailvehicle/detailvehicle.component';
import {AddVehicleComponent} from './pages/tenant/add-vehicle/add-vehicle.component';

import {RentalListComponent} from './pages/tenant/rental-list/rental-list.component';

// User
import {UserComponent} from './pages/user/user.component';

// other
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'tenant',
    component: TenantComponent,
    children: [
      { path: 'vehicles-list', component: VehiclesListComponent },
      { path: 'vehicles-list-detail', component: VehiclesListDetailComponent },
      { path: 'add-vehicle', component: AddVehicleComponent },
      { path: 'rental-list', component: RentalListComponent },
      { path: '', component: RentalListComponent }
    ]
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'detailvehicle', component: DetailvehicleComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/user', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
