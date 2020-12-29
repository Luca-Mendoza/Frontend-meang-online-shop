import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveComponent implements OnInit {
  token: string;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.token = params.token;
      console.log(this.token);
    });
  }

  ngOnInit(): void {
  }

}
