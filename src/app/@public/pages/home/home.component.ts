import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { UsersService } from '@core/services/users.service';
import { ICarouselItem } from '@mugan86/ng-shop-ui/lib/interfaces/carousel-item.interface';
import carouselItem from '@data/carousel.json';
import productsList from '@data/products.json';
import { IProduct } from '@mugan86/ng-shop-ui/lib/interfaces/product.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: ICarouselItem[] = [];
  productsList;
  listOne;
  listTwo;
  listThree;
  constructor(private usersApi: UsersService, private auth: AuthService) {}

  ngOnInit(): void {
    this.items = carouselItem;
    this.productsList = productsList;

    // console.log('Carousel items', this.items);
    // tslint:disable-next-line: deprecation
    this.usersApi.getUsers(2, 1).subscribe((result) => {
    // console.log(result); // { {obtener la Info : status message users: []}
    });
    this.listOne = this.fakeRandomProductsList();
    this.listTwo = this.fakeRandomProductsList();
    this.listThree = this.fakeRandomProductsList();
  }

  fakeRandomProductsList() {
    const list = [];
    const arrayMax = 4;
    const limit = this.productsList.length;

    for (let i = 0; i < arrayMax; i++) {
      list.push(this.productsList[Math.floor(Math.random() * limit)]);
    }
    return list;
  }
}
