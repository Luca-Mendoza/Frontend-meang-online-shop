import { TitleService } from '@admin-core/services/title.service';
import { AdminService } from '@admin-core/services/admin.service';

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
      icon: 'fas fa-tags',
      title: 'Tags',
      value: 'tags',
    },
    {
      icon: 'fas fa-atlas',
      title: 'Géneros',
      value: 'genres',
    },
    {
      icon: 'fas fa-gamepad',
      title: 'Juegos',
      value: 'gemes',
    },
    {
      icon: 'fab fa-chromecast',
      title: 'Plataformas',
      value: 'planforms',
    },
  ];

  constructor(
    private titleService: TitleService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.titleService.updateTitle(LABEL.DASHBOARD);
    this.adminService.getStats().subscribe((data) => {
      console.log(data);
    });
  }
}
