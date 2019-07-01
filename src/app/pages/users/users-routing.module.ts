import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UProfileComponent } from './u-profile/u-profile.component';
import { UDashboardComponent } from './u-dashboard/u-dashboard.component';
import { URegisterComponent } from './u-register/u-register.component';
import { UCatalogueComponent } from './u-catalogue/u-catalogue.component';
import { UOrdersComponent } from './u-orders/u-orders.component';
import { URequestsComponent } from './u-requests/u-requests.component';
import { UCandsComponent } from './u-cands/u-cands.component';

export const routes: Routes = [
  { path: 'u-profile', component: UProfileComponent },
  { path: 'u-dashboard', component: UDashboardComponent },
  { path: 'u-register', component: URegisterComponent },
  { path: 'u-catalogue', component: UCatalogueComponent },
  { path: 'u-orders', component: UOrdersComponent },
  { path: 'u-requests', component: URequestsComponent },
  { path: 'u-cands', component: UCandsComponent },

  {path: '**', redirectTo: 'u-dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
