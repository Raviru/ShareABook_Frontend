import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TuitionRoutingModule } from './tuition-routing.module';
import { TProfileComponent } from './t-profile/t-profile.component';
import { TDashboardComponent } from './t-dashboard/t-dashboard.component';


@NgModule({
  declarations: [
    TDashboardComponent,
    TProfileComponent,
  ],
  imports: [
    CommonModule,
    TuitionRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [
    TDashboardComponent,
    TProfileComponent,
  ],

})
export class TuitionModule { }
