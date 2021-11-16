import { CheckoutResumeModule } from './checkout-resume/checkout-resume.module';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { StripePaymentFormModule } from '@mugan86/stripe-payment-form';

@NgModule({
  declarations: [CheckoutComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    CheckoutResumeModule,
    StripePaymentFormModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CheckoutModule {}
