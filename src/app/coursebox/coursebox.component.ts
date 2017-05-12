import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
import { Course } from '../common/course';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coursebox',
  templateUrl: './coursebox.component.html',
  styleUrls: ['./coursebox.component.css'],
  animations: [
    trigger('courseState', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroudColor: 'black',
        transform: 'scale(0.98)'
      }))
    ])
  ]
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
    course.state = 'active';
    setTimeout(() => {
      course.state = 'inactive';
    }, 100);
    this.CartService.addToCart(course);
  }

}
