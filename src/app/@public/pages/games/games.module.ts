import { ProductCategoryListModule } from '@core/components/product-category-list/product-category-list.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { FormsModule } from '@angular/forms';
import { TablePaginationModule } from '@shared/table-pagination/table-pagination.module';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [GamesComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    ProductCategoryListModule,
    NgbPaginationModule,
    TablePaginationModule,
    FormsModule,
  ],
})
export class GamesModule {}
