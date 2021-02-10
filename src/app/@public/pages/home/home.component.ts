import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/services/auth.service';
import { UsersService } from '@core/services/users.service';
import { ICarouselItem } from '@mugan86/ng-shop-ui/lib/interfaces/carousel-item.interface';
import carouselItem from '@data/carousel.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items: ICarouselItem[] = [];​
  constructor(
    private usersApi: UsersService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.items = carouselItem;
    console.log('Carousel items', this.items);
    this.usersApi.getUsers(2, 1).subscribe(result => {
      console.log(result); // { {obtener la Info : status message users: []}
    });


  }

}
