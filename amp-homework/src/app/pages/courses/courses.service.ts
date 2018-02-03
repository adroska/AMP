import { Injectable } from '@angular/core';
import { Http, Response, Request, RequestOptions, RequestMethod } from '@angular/http';
import { Course } from '../../interfaces/course';
import { courses } from '../../mock-data/courses';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoursesService {

  private courseList: Course[];
  private baseUrl: string;

  public constructor(private http: Http) {}

  public getList(start: number, count: number): Observable<Course[]> {
      return this.http
        .get('http://localhost:3004/courses', {
          params: {
            start,
            count
          }
        })
        .map((response: Response) => response.json())
        .map((courses) => courses.map((course) => new Course(course)));
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
