import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../common/course';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-coursebox',
  templateUrl: './coursebox.component.html',
  styleUrls: ['./coursebox.component.css'],
})
export class CourseboxComponent {

  @Input()
  course: Course;

  constructor(private CartService: CartService) { }

  add(course: Course) {
    this.CartService.addToCart(course);
  }

}
