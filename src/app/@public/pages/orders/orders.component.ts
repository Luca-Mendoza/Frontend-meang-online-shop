import { Component, OnInit } from '@angular/core';
import { CURRENCY_SELECT } from '@core/constants/config';
import { IMeData } from '@core/interfaces/session.interface';
import { ICharge } from '@core/interfaces/stripe/charge.interface';
import { AuthService } from '@core/services/auth.service';
import { ChargeService } from '@shop/core/services/stripe/charge.service';
import { CustomerService } from '@shop/core/services/stripe/customer.service';
import { take } from 'rxjs/internal/operators/take';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  currencySymbol = CURRENCY_SELECT;
  meDeta: IMeData;
  startingAfter: '';
  hasMore: false;
  charges: Array<ICharge> = [];

  constructor(
    private auth: AuthService,
    private chargeService: ChargeService,
    private customerService: CustomerService
  ) {
    this.auth.accessVar$.pipe(take(1)).subscribe((meDeta: IMeData) => {
      this.meDeta = meDeta;
      // Si tenemos información cargamos con el cliente
      if (this.meDeta.user.stripeCustomer !== '') {
        console.log(this.meDeta);
        this.loadData();
      }
    });
  }

  ngOnInit(): void {
    this.auth.start();
  }

  loadData() {
    console.log('Cargando datos...');
    this.chargeService
      .listByCustomer(
        this.meDeta.user.stripeCustomer,
        10,
        this.startingAfter,
        ''
      )
      .pipe(take(1))
      .subscribe((data: { hasMore: boolean; charger: Array<ICharge> }) => {
        console.log(data);
      });
  }
}
