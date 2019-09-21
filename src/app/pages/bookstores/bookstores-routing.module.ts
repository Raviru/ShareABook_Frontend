import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BProfileComponent } from './b-profile/b-profile.component';
import { BDashboardComponent } from './b-dashboard/b-dashboard.component';
import { BRegisterComponent } from './b-register/b-register.component';

const routes: Routes = [
  { path: 'b-profile', component: BProfileComponent },
  { path: 'b-dashboard', component: BDashboardComponent },
  { path: 'b-register', component: BRegisterComponent },

  {path: '**', redirectTo: 'b-dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookstoresRoutingModule { }
