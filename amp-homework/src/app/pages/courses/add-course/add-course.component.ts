import { Component, OnInit } from '@angular/core';
import { Course } from '../../../interfaces/course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  public course: Course;

  public constructor() { }

  public ngOnInit() {
    this.course = { 
      id: 0,
      title: '',
      duration: 0,
      creationDate: new Date(),
      description: '',
      topRated: false
    };
  }

  public save() {
    console.log('Add Course Component - Save');
  }

  public cancel() {
    console.log('Add Course Component - Cancel');
  }
}
