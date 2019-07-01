import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UProfileComponent } from './u-profile/u-profile.component';
import { UDashboardComponent } from './u-dashboard/u-dashboard.component';
import { URegisterComponent } from './u-register/u-register.component';
import { UNavbarComponent } from './u-navbar/u-navbar.component';
import { UCatalogueComponent } from './u-catalogue/u-catalogue.component';
import { UOrdersComponent } from './u-orders/u-orders.component';
import { URequestsComponent } from './u-requests/u-requests.component';
import { UCandsComponent } from './u-cands/u-cands.component';


@NgModule({
  declarations: [
    UDashboardComponent,
    UProfileComponent,
    URegisterComponent,
    UNavbarComponent,
    UCatalogueComponent,
    UOrdersComponent,
    URequestsComponent,
    UCandsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [
    UDashboardComponent,
    UProfileComponent,
    URegisterComponent,
    UNavbarComponent,
    UCatalogueComponent,
    UOrdersComponent,
    URequestsComponent,
    UCandsComponent
  ],

})
export class UsersModule { }
