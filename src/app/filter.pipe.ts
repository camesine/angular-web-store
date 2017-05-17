import { Pipe, PipeTransform } from '@angular/core';
import { Course } from './common/course';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allCourses: Course[], nombre: string) {

    if (nombre === undefined || nombre === null || nombre === '') {
      return allCourses;
    }

    let filter: Course[] = [];

    allCourses.forEach((course) => {

      if (course.name.toUpperCase().startsWith(nombre.toUpperCase())) {
        filter.push(course);
      }
    });

    return filter;

  }

}
