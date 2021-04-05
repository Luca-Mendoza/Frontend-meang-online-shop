import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { IMeData } from '@core/interfaces/session.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  meData: IMeData;
  constructor(private auth: AuthService, private route: Router) {
    this.auth.accessVar$.subscribe((data: IMeData) => {
      if (!data.status) {
        // Ir al login
        this.route.navigate(['/login']);
        return;
      }
      this.meData = data;
    });
  }

  ngOnInit(): void {
    this.auth.start();
  }
}
