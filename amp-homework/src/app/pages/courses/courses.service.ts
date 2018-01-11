import { Injectable } from '@angular/core';
import { Course } from '../../interfaces/course';
import { courses } from '../../mock-data/courses';

@Injectable()
export class CoursesService {

  private courseList: Course[];

  public constructor() { }

  public getList(): Course[] {
    return this.courseList = courses;
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
