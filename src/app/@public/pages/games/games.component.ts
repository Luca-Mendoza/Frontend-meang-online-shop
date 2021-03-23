import { GAMES_PAGES_INFO, TYPE_OPERATION } from './game.constants';
import { IGamePageInfo } from './games-page-info.interface';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ACTIVE_FILTERS } from '@core/constants/filter';
import { IInfoPage } from '@core/interfaces/result-data.interface';
import { ProductsService } from '@core/services/products.service';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  selectPage;
  infoPage: IInfoPage = {
    page: 1,
    pages: 8,
    total: 160,
    itemsPage: 20,
  };
  typeData: TYPE_OPERATION;
  gamesPageInfo: IGamePageInfo;
  productsList: Array<IProduct> = [];
  constructor(
    private product: ProductsService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      const keyPage = `${params.type}/${params.filter}`;
      this.gamesPageInfo = GAMES_PAGES_INFO[keyPage];
      this.typeData = params.type;
      this.selectPage = 1;
      this.loadData();
    });
  }

  loadData() {
    //
    if (this.typeData === TYPE_OPERATION.PLATFORMS) {
      this.product
        .shopProductsPlatforms(
          this.selectPage,
          this.infoPage.itemsPage,
          ACTIVE_FILTERS.ACTIVE,
          false,
          this.gamesPageInfo.platformsIds,
          true,
          true
        )
        .subscribe((data) => {
          this.asignResult(data);
        });
      return;
    }

    // Producto mas economicos $45 y que tengamos en stock -40
    this.product
      .getByLastUnitsOffers(
        this.selectPage,
        this.infoPage.itemsPage,
        ACTIVE_FILTERS.ACTIVE,
        false,
        this.gamesPageInfo.topPrice,
        this.gamesPageInfo.stock,
        true,
        true
      )
      .subscribe((data) => {
        this.asignResult(data);
      });
  }
  // asignamos el valor del resultado  de la busqueda
  private asignResult(data) {
    this.productsList = data.result;
    this.infoPage = data.info;
  }
}
