import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CURRENCY_SELECT } from '@core/constants/config';
import { IMeData } from '@core/interfaces/session.interface';
import { ICharge } from '@core/interfaces/stripe/charge.interface';
import { AuthService } from '@core/services/auth.service';
import { UsersService } from '@core/services/users.service';
import { ChargeService } from '@shop/core/services/stripe/charge.service';
import { profileEditDialog } from '@shared/alerts/alerts';
import { basicAlert } from '@shared/alerts/toasts';
import { TYPE_ALERT } from '@shared/alerts/values.config';
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
    private usersService: UsersService,
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

  async editProfile() {
    if (!this.meDeta?.user) {
      return;
    }
    const result = await profileEditDialog(this.meDeta.user);
    if (result && result.value) {
      const val = result.value as any;
      const updatedUser = {
        id: String(this.meDeta.user.id),
        name: String(val.name || ''),
        lastname: String(val.lastname || ''),
        birthday: String(val.birthday || '2000-01-01'),
        email: String(this.meDeta.user.email || ''),
        role: String(this.meDeta.user.role || 'CLIENT'),
      };

      this.usersService.update(updatedUser).pipe(take(1)).subscribe(
        (res: any) => {
          if (res?.status) {
            basicAlert(TYPE_ALERT.SUCCESS, 'Tus datos personales se han actualizado correctamente');
            if (this.meDeta && this.meDeta.user) {
              const updatedUserData = res?.user ? { ...this.meDeta.user, ...res.user } : {
                ...this.meDeta.user,
                name: val.name,
                lastname: val.lastname,
                birthday: val.birthday,
              };
              const updatedMeData: IMeData = {
                ...this.meDeta,
                status: true,
                user: updatedUserData,
              };
              this.meDeta = updatedMeData;
              this.auth.updateSession(updatedMeData);
            }
          } else {
            basicAlert(TYPE_ALERT.WARNING, res?.message || 'No se pudieron actualizar los datos');
          }
        },
        (err: any) => {
          console.error('Error updating profile:', err);
          basicAlert(TYPE_ALERT.WARNING, err?.message || 'Error al actualizar tus datos');
        }
      );
    }
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
