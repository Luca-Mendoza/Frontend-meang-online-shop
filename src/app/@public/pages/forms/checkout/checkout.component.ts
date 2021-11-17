import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { IMeData } from '@core/interfaces/session.interface';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StripePaymentService } from '@mugan86/stripe-payment-form';
import { take } from 'rxjs/internal/operators/take';

import { CartService } from '@shop/core/services/cart.service.ts.service';
import { CustomerService } from '@shop/core/services/stripe/customer.service';

import { CURRENCY_CODE, CURRENCY_SELECT } from '@core/constants/config';
import { infoEventlert, loadData } from '@shared/alerts/alerts';
import { TYPE_ALERT } from '@shared/alerts/values.config';

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
    private router: Router,
    private stripePayment: StripePaymentService,
    private cartService: CartService,
    private customerService: CustomerService
  ) {
    this.auth.accessVar$.subscribe((data: IMeData) => {
      if (!data.status) {
        // Ir al login
        this.router.navigate(['/login']);
        return;
      }
      this.meData = data;
    });

    this.stripePayment.cardTokenVar$
      .pipe(take(1))
      .subscribe((token: string) => {
        if (
          token.indexOf('tok_') > -1 &&
          this.meData.status &&
          this.address !== ''
        ) {
          // Podemos enviar los datos
          console.log('Podemos enviar la info correctamente: ', token);
          // Divisa
          console.log('Divisa: ', CURRENCY_SELECT, 'Código: ', CURRENCY_CODE);
          // Cliente de Stripe
          console.log('Cliente de Stripe: ', this.meData.user.stripeCustomer);
          // Total a pagar
          console.log('Total a pagar: ', this.cartService.cart.total);

          // Descripcion del pedido (tenemos que crear función en el carrito)
          console.log(
            'Descripcion del pedido: ',
            this.cartService.orderDescription()
          );
        }
      });
  }

  ngOnInit(): void {
    this.auth.start();

    if (localStorage.getItem('address')) {
      this.address = localStorage.getItem('address');
      localStorage.removeItem('address');
    }

    this.cartService.initialize();
    localStorage.removeItem('route_after_login');
  }

  async sendData() {
    if (this.meData.user.stripeCustomer === null) {
      // Alerta para mostrar info
      await infoEventlert(
        'Cliente no existe',
        'Nesecitamos un cliente  para realizar el pago'
      );
      const StripeName = `${this.meData.user.name} ${this.meData.user.lastname}`;
      const StripeEmail = this.meData.user.email;

      loadData('Procesando la informacion', 'Creando el Cliente...');

      this.customerService
        .add(StripeName, StripeEmail)
        .pipe(take(1))
        .subscribe(async (result: { status: boolean; message: string }) => {
          if (result.status) {
            await infoEventlert(
              'Cliente añadido al usuario',
              'Reiniciar la sesión',
              TYPE_ALERT.SUCCESS
            );
            localStorage.setItem('address', this.address);
            localStorage.setItem('route_after_login', this.router.url);
            this.auth.resetSession();
          } else {
            await infoEventlert(
              'Cliente no añadido',
              result.message,
              TYPE_ALERT.WARNING
            );
          }
        });
      return;
    }
    this.stripePayment.takeCardToken(true);
  }
}
