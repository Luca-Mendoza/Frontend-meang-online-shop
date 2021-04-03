import { QuantitySelectorModule } from '@mugan86/ng-shop-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [CommonModule, QuantitySelectorModule],
  exports: [ShoppingCartComponent],
})
export class ShoppingCartModule {}
