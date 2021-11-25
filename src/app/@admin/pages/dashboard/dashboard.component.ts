import { TitleService } from '@admin-core/services/title.service';
import { Component, OnInit } from '@angular/core';
import { LABEL } from '@admin-core/constants/title.constants';

import { IGeneralInfo } from '@shared/general-info/interfaces/general-info.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  items: Array<IGeneralInfo> = [
    {
      icon: 'fas fa-users',
      title: 'Usuarioss',
      value: 'users',
    },
    {
      icon: 'fas fa-store-alt',
      title: 'Productos en venta',
      value: 'ShoProducts',
    },
    {
      icon: 'fas fa-users',
      title: 'Usuarioss',
      value: 'users',
    },
    {
      icon: 'fas fa-users',
      title: 'Usuarioss',
      value: 'users',
    },
  ];

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.updateTitle(LABEL.DASHBOARD);
  }
}
