import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { TenantComponent } from './pages/tenant/tenant.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { VehiclesListComponent } from './pages/tenant/vehicles-list/vehicles-list.component';
import { RentalListComponent } from './pages/tenant/rental-list/rental-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailvehicleComponent } from './pages/user/detailvehicle/detailvehicle.component';
import { VehiclesListDetailComponent } from './pages/tenant/vehicles-list-detail/vehicles-list-detail.component';
import { AddVehicleComponent } from './pages/tenant/add-vehicle/add-vehicle.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TenantComponent,
    UserComponent,
    LoginComponent,
    VehiclesListComponent,
    RentalListComponent,
    NotFoundComponent,
    DetailvehicleComponent,
    VehiclesListDetailComponent,
    AddVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
