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

import { ChargeService } from '@shop-core/services/stripe/charge.service';
import { IPayment } from '@core/interfaces/stripe/payment.interface';

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
    private customerService: CustomerService,
    private chargeService: ChargeService
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
          // Almacenar la información para enviar
          const payment: IPayment = {
            // Podemos enviar los datos del usuario
            token,
            // Total a pagar
            amount: this.cartService.cart.total.toString(),
            // Descripcion del pedido (tenemos que crear función en el carrito)
            description: this.cartService.orderDescription(),
            // Cliente de Stripe
            customer: this.meData.user.stripeCustomer,
            //  Divisa
            currency: CURRENCY_CODE,
          };
          // Enviar la información loanding....
          loadData(
            'Realizando el pago',
            'Espera mientras se procesa la información de pago'
          );

          // Enviar la información y procesarelpago
          this.chargeService
            .pay(payment)
            .pipe(take(1))
            .subscribe(
              async (result: {
                status: boolean;
                message: string;
                charge: object;
              }) => {
                if (result.status) {
                  // Procesar el pago
                  console.log('Ok');
                  console.log(result.charge);
                  await infoEventlert(
                    'Pedido realizado correctamente',
                    'Has efectuado correctamente el pedido. ¡¡Muchas gracias!!',
                    TYPE_ALERT.SUCCESS
                  );
                  this.cartService.clear();
                } else {
                  // Mostrar mensaje de error
                  console.log('Error', result.message);
                  await infoEventlert(
                    'Pedido NO DE HA realizado',
                    'El predido no se a realizado. Inténtelo de nuevo poravor',
                    TYPE_ALERT.SUCCESS
                  );
                }
              }
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
