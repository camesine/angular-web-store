import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../common/course';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coursebox',
  templateUrl: './coursebox.component.html',
  styleUrls: ['./coursebox.component.css'],
})
export class CourseboxComponent {

  @Input()
  course: Course;

  constructor(private CartService: CartService, private Router: Router) { }

  goToDetails(course: Course) {
    const link = ['/course', course.id];
    this.Router.navigate(link);
  }

  add(course: Course) {
    this.CartService.addToCart(course);
  }

}
