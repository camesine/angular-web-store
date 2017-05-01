import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../common/course';

@Component({
  selector: 'app-coursebox',
  templateUrl: './coursebox.component.html',
  styleUrls: ['./coursebox.component.css']
})
export class CourseboxComponent implements OnInit {

  @Input()
  course: Course;

  constructor() { }

  ngOnInit() {
  }

}
