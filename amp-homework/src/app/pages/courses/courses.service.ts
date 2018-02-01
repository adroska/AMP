import { Injectable } from '@angular/core';
import { Http, Response, Request, RequestOptions, RequestMethod } from '@angular/http';
import { Course } from '../../interfaces/course';
import { courses } from '../../mock-data/courses';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CoursesService {

  private courseList: Course[];
  private baseUrl: string;

  public constructor(private http: Http) {
    this.baseUrl = 'http://localhost:4002';
  }

  /*public getList(): Observable<Course> {  // WITHOUT HTTP - WORKS
    return Observable.from(courses)
      .filter(course => {
        var currentDate = new Date(),
          twoWeeksInMillisec = 14 * 24 * 60 * 60 * 1000;
        
        return !(currentDate.valueOf() - twoWeeksInMillisec > course.creationDate.valueOf());
      });
  }*/

  public getList(): Observable<Course[]> {    // WITH HTTP - DOESN'T WORK
    let request: Request,
      requestOptions: RequestOptions = new RequestOptions();

      requestOptions.method = RequestMethod.Get;
      requestOptions.url = `${this.baseUrl}/courses`;

      request = new Request(requestOptions);

      return this.http.request(request)
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
