import { Injectable } from '@angular/core';
import { Course } from '../../interfaces/course';
import { courses } from '../../mock-data/courses';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CoursesService {

  private courseList: Course[];

  public constructor() { }

  public getList(): Course[] {
    this.courseList = [];
    var source = Observable.from(courses)
    .filter(course => {
      var currentDate = new Date(),
        twoWeeksInMillisec = 14 * 24 * 60 * 60 * 1000;
      
      return !(currentDate.valueOf() - twoWeeksInMillisec > course.creationDate.valueOf());
    });
    source.subscribe(x => this.courseList.push(x));

    return this.courseList;
  }

  private createItem(course: Course): void {
    this.courseList.push(course);
  }

  private getItemById(id: number): Course {
    return this.courseList.find(isMatchingId, id);
  }

  public removeItemById(id: number): void {
    if (window.confirm('Do you really want to delete this course?')) {
      var itemIndex = this.courseList.findIndex(isMatchingId, id);

      this.courseList.splice(itemIndex, 1);
    }
  }

  private updateItem(modifiedCourse: Course): void {
    var course = this.getItemById(modifiedCourse.id),
        key;
    if (course) {
      for (key in course) {
        course[key] = modifiedCourse[key];
      }
      
      // or removeItemById(modifiedCourse.id) then createItem(modifiedCourse)
      // but in that case additional logic is needed not to show the
      // 'do you really want to delete this item?' message
    }
  }

}

function isMatchingId(element: Course): boolean {
  return element.id == this;
}
