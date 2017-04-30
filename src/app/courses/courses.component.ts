import { Component, OnInit } from '@angular/core';

export interface Course {
  id: number;
  name: string;
  image: string;
  price: number;
}

const COURSES: Course[] = [
  {
    id: 1,
    name: 'Angular 2',
    image: 'https://angular.io/resources/images/logos/angular/angular.svg',
    price: 59
  },
  {
    id: 2,
    name: 'REACT',
    image: 'http://vincent.billey.me/talks/react-putting-js-in-your-face/assets/react-logo.png',
    price: 29
  },
];

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = 'CURSOS DISPONIBLES';

  Courses = COURSES;

  constructor() { }

  ngOnInit() {
  }

}
