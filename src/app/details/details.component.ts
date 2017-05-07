import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Course } from '../common/course';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ApiService]
})
export class DetailsComponent implements OnInit {

  Course: Course;

  constructor(
    private router: ActivatedRoute,
    private Location: Location,
    private ApiService: ApiService
  ) { }

  ngOnInit() {
    this.router.params.forEach((params: Params) => {
      const id = +params['id'];
      this.ApiService.getCourse(id)
        .then(course => this.Course = course);
    });
  }

}
