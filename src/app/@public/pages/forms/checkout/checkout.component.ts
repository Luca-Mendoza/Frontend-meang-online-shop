import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { IMeData } from '@core/interfaces/session.interface';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StripePaymentService } from '@mugan86/stripe-payment-form';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  meData: IMeData;
  key = environment.stripePublicKey;
  address = '';
  constructor(
    private auth: AuthService,
    private route: Router,
    private stripePayment: StripePaymentService
  ) {
    this.auth.accessVar$.subscribe((data: IMeData) => {
      if (!data.status) {
        // Ir al login
        this.route.navigate(['/login']);
        return;
      }
      this.meData = data;
    });

    this.stripePayment.cardTokenVar$.subscribe((token: string) => {
      if (
        token.indexOf('tok_') > -1 &&
        this.meData.status &&
        this.address !== ''
      ) {
        // Podemos enviar los datos
        console.log('Podemos enviar la info correctamente: ', token);
      }
    });
  }

  ngOnInit(): void {
    this.auth.start();
    localStorage.removeItem('router_after_login');
  }

  sendData() {
    this.stripePayment.takeCardToken(true);
    console.log('send data', true);
  }
}
