import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCategoryListComponent } from './product-category-list.component';
import { ProductItemModule } from '@mugan86/ng-shop-ui';

@NgModule({
  declarations: [ProductCategoryListComponent],
  imports: [CommonModule, RouterModule, ProductItemModule],
  exports: [ProductCategoryListComponent],
})
export class ProductCategoryListModule { }
