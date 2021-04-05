import { CheckoutResumeModule } from './checkout-resume/checkout-resume.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [CommonModule, CheckoutRoutingModule, CheckoutResumeModule],
})
export class CheckoutModule {}
