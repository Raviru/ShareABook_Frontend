import { HttpClientModule } from '@angular/common/http';
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
import { UBookaddComponent } from './u-bookadd/u-bookadd.component';
import { UMenubarComponent } from './components/u-menubar/u-menubar.component';

import { BookDetailsService } from './../../services/book-details.service';

@NgModule({
  declarations: [
    UDashboardComponent,
    UProfileComponent,
    URegisterComponent,
    UNavbarComponent,
    UCatalogueComponent,
    UOrdersComponent,
    URequestsComponent,
    UCandsComponent,
    UBookaddComponent,
    UMenubarComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    BookDetailsService
  ],
  bootstrap: [
    UDashboardComponent,
    UProfileComponent,
    URegisterComponent,
    UNavbarComponent,
    UCatalogueComponent,
    UOrdersComponent,
    URequestsComponent,
    UCandsComponent,
    UMenubarComponent
  ],

})
export class UsersModule { }
