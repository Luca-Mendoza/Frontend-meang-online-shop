import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotRoutingModule } from './forgot-routing.module';
import { ForgotComponent } from './forgot.component';


@NgModule({
  declarations: [ForgotComponent],
  imports: [
    CommonModule,
    ForgotRoutingModule,
    FormsModule
  ]
})
export class ForgotModule { }
