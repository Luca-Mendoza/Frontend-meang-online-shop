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
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	items: ICarouselItem[] = [];
	productsList;
	constructor(private usersApi: UsersService, private auth: AuthService) {}

	ngOnInit(): void {
		this.items = carouselItem;
		this.productsList = productsList;

		console.log('Carousel items', this.items);
		this.usersApi.getUsers(2, 1).subscribe((result) => {
			console.log(result); // { {obtener la Info : status message users: []}
		});
	}
	addToCart($event: IProduct) {
		// Usar la información del producto pasado para llevarlo al carrito de compra
		console.log('Carrito', $event);
	}

	showProductDetails($event: IProduct) {
		console.log('Info', $event);
	}
}
