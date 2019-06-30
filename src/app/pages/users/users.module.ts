import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from './users-routing.module';
import { UProfileComponent } from './u-profile/u-profile.component';
import { UDashboardComponent } from './u-dashboard/u-dashboard.component';
import { URegisterComponent } from './u-register/u-register.component';


@NgModule({
  declarations: [
    UDashboardComponent,
    UProfileComponent,
    URegisterComponent
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
  ],

})
export class UsersModule { }
