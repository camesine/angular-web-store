import { Component, OnInit } from '@angular/core';
import { Course } from '../common/course';
import { CartService } from '../services/cart.service';

const COURSES: Course[] = [
  {
    id: 1,
    name: 'Angular 2',
    image: 'https://angular.io/resources/images/logos/angular/angular.svg',
    price: 59
  },
  {
    id: 2,
    name: 'React',
    image: 'http://vincent.billey.me/talks/react-putting-js-in-your-face/assets/react-logo.png',
    price: 29
  },
];

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CartService]
})
export class CoursesComponent implements OnInit {

  title = 'CURSOS DISPONIBLES';

  Courses = COURSES;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

}
