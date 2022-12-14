import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { LoginComponent } from './login/login.component';
import { GuestComponent } from './guest.component';


@NgModule({
  declarations: [
    LoginComponent,
    GuestComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule
  ]
})
export class GuestModule { }
