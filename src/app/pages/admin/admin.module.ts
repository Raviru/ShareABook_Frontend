import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AProfileComponent } from './a-profile/a-profile.component';
import { ADashboardComponent } from './a-dashboard/a-dashboard.component';
import { RegisterBComponent } from './register-b/register-b.component';


@NgModule({
  declarations: [
    ADashboardComponent,
    AProfileComponent,
    RegisterBComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [
    ADashboardComponent,
    AProfileComponent,
  ],

})
export class AdminModule { }
