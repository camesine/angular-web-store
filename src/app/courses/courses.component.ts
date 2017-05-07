import { Component, OnInit } from '@angular/core';
import { Course } from '../common/course';
import { CartService } from '../services/cart.service';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [ApiService]
})
export class CoursesComponent implements OnInit {

  title = 'CURSOS DISPONIBLES';

  Courses: Course [];

  constructor(private ApiService: ApiService) { }

  ngOnInit() {
    this.getCourses();
  }

  async getCourses() {
    this.Courses = await this.ApiService.getCourses();
  }

}
