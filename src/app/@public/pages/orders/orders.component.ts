import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CURRENCY_SELECT } from '@core/constants/config';
import { IMeData } from '@core/interfaces/session.interface';
import { ICharge } from '@core/interfaces/stripe/charge.interface';
import { AuthService } from '@core/services/auth.service';
import { ChargeService } from '@shop/core/services/stripe/charge.service';
import { take } from 'rxjs/internal/operators/take';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  activeTab: 'data' | 'orders' = 'data';
  currencySymbol = CURRENCY_SELECT;
  meDeta: IMeData;
  startingAfter: string = '';
  hasMore = new Boolean(false);
  charges: Array<ICharge> = [];
  loading = true;
  loadMoreBtn = false;

  // Profile data completion calculation
  profileCompletion = 75;

  constructor(
    private auth: AuthService,
    private chargeService: ChargeService,
    private route: ActivatedRoute
  ) {
    this.auth.accessVar$.subscribe((meDeta: IMeData) => {
      this.meDeta = meDeta;
      if (this.meDeta?.user) {
        if (this.meDeta.user.stripeCustomer) {
          this.loadChargeData(true);
        } else {
          // Re-fetch session data to ensure we have the latest stripeCustomer from MongoDB
          this.auth.getMe().pipe(take(1)).subscribe((res: any) => {
            if (res?.user?.stripeCustomer) {
              this.meDeta.user.stripeCustomer = res.user.stripeCustomer;
              this.loadChargeData(true);
            } else {
              this.loading = false;
            }
          }, () => {
            this.loading = false;
          });
        }
      } else {
        this.loading = false;
      }
    });
  }

  ngOnInit(): void {
    this.auth.start();
    this.route.queryParams.subscribe((params) => {
      if (params.tab === 'data') {
        this.activeTab = 'data';
      } else {
        this.activeTab = 'orders';
      }
    });
  }

  setTab(tab: 'data' | 'orders') {
    this.activeTab = tab;
  }

  loadChargeData(reset: boolean = false) {
    if (reset) {
      this.charges = [];
      this.startingAfter = '';
    }
    this.loading = true;
    this.chargeService
      .listByCustomer(
        this.meDeta.user.stripeCustomer,
        10,
        this.startingAfter,
        ''
      )
      .pipe(take(1))
      .subscribe(
        (data: { hasMore: boolean; charges: Array<ICharge> }) => {
          if (reset) {
            this.charges = data.charges || [];
          } else {
            (data.charges || []).forEach((item: ICharge) => this.charges.push(item));
          }
          this.hasMore = data.hasMore;

          if (this.hasMore && this.charges.length > 0) {
            this.startingAfter = this.charges[this.charges.length - 1].id;
            this.loadMoreBtn = true;
          } else {
            this.loadMoreBtn = false;
            this.startingAfter = '';
          }
          this.loading = false;
        },
        () => {
          this.loading = false;
        }
      );
  }
}
