import { Component, OnInit } from '@angular/core';
import { CURRENCY_SELECT } from '@core/constants/config';
import { IMeData } from '@core/interfaces/session.interface';
import { ICharge } from '@core/interfaces/stripe/charge.interface';
import { AuthService } from '@core/services/auth.service';
import { closeAlert, loadData } from '@shared/alerts/alerts';
import { ChargeService } from '@shop/core/services/stripe/charge.service';
import { take } from 'rxjs/internal/operators/take';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  currencySymbol = CURRENCY_SELECT;
  meDeta: IMeData;
  startingAfter: string = '';
  hasMore = new Boolean(false);
  charges: Array<ICharge> = [];
  loading = true;
  loadMoreBtn = false;

  constructor(private auth: AuthService, private chargeService: ChargeService) {
    this.auth.accessVar$.pipe(take(1)).subscribe((meDeta: IMeData) => {
      this.meDeta = meDeta;
      // Si tenemos información cargamos con el cliente
      if (this.meDeta.user.stripeCustomer !== '') {
        this.loadChargeData();
      }
    });
  }

  ngOnInit(): void {
    this.auth.start();
  }

  loadChargeData() {
    loadData('Cargando...', 'Espera mientra cargan los pedidos');
    this.chargeService
      .listByCustomer(
        this.meDeta.user.stripeCustomer,
        10,
        this.startingAfter,
        ''
      )
      .pipe(take(1))
      .subscribe((data: { hasMore: boolean; charges: Array<ICharge> }) => {
        // console.log(data);

        // this.charges = data.charges;

        data.charges.map((item: ICharge) => this.charges.push(item));

        this.hasMore = data.hasMore;

        if (this.hasMore) {
          this.startingAfter = data.charges[data.charges.length - 1].id;
          this.loadMoreBtn = true;
        } else {
          this.loadMoreBtn = false;
          this.startingAfter = '';
        }
        closeAlert();
        this.loading = false;
      });
  }
}
