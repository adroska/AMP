import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../interfaces/course';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: Course[], courseProperty: string, isIncrease: boolean): Course[] {
    return courses.sort((item1: Course, item2: Course) => {
      var value1 = item1[courseProperty],
          value2 = item2[courseProperty];

      return isIncrease ? value1 - value2 : value2 - value1;     
    });
  }
}
