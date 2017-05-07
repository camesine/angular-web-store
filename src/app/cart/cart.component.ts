import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  courses: any;
  details: any;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.courses = this.cartService.getCourses();
    this.details = this.cartService.getDetail();
  }

  keys() {
    return Object.keys(this.courses);
  }

}
