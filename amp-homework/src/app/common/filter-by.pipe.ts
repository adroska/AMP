import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../interfaces/course';

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  public transform(courses: Course[], courseProperty: string, searchText: string): Course[] {
    return courses.filter(course => course[courseProperty].toLowerCase().includes(searchText.toLowerCase()));
  }

}
