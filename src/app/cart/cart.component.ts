import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {

  courses: any;
  details: any;

  constructor(private cartService: CartService) {
    this.courses = 0;
  }

  ngOnInit() {
    this.cartService.getCourses().subscribe(r => this.courses = r );
}

}
