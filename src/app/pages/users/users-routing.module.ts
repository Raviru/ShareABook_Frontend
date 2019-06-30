import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UProfileComponent } from './u-profile/u-profile.component';
import { UDashboardComponent } from './u-dashboard/u-dashboard.component';
import { URegisterComponent } from './u-register/u-register.component';

const routes: Routes = [
  { path: 'u-profile', component: UProfileComponent },
  { path: 'u-dashboard', component: UDashboardComponent },
  { path: 'u-register', component: URegisterComponent },

  {path: '**', redirectTo: 'u-dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
