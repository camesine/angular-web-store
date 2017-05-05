import { Injectable } from '@angular/core';
import { Course } from '../common/course';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {

  public courses = new Subject<any>();

  constructor () {
    this.courses.asObservable();
  }

  getCourses() {
    return this.courses;
  }

  addToCart (course: Course) {
    this.courses.next(10);
  }




  // addToCart(course: Course) {
  //   console.log(course);
  //   this.courses++;
  //   this.detail++;
  //   console.log(this.courses);
  //   console.log(this.detail);
  //   // if (!this.courses[course.id]) {
  //   //   this.courses[course.id] = {
  //   //     quantity: 1,
  //   //     name: course.name,
  //   //     price: course.price
  //   //   };
  //   // } else {
  //   //   this.courses[course.id].quantity += 1;
  //   // }
  //   // this.detail.total += course.price;
  //   // this.detail.items += 1;
  //   // console.log(this.detail);
  // }

}
