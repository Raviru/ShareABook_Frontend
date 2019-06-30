import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TProfileComponent } from './t-profile/t-profile.component';
import { TDashboardComponent } from './t-dashboard/t-dashboard.component';

const routes: Routes = [
  { path: 't-profile', component: TProfileComponent },
  { path: 't-dashboard', component: TDashboardComponent },

  {path: '**', redirectTo: 't-dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TuitionRoutingModule { }
