import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../../interfaces/course';
import { ChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCourseComponent implements OnInit {
  public course: Course;

  public constructor(
    private router: Router,
  ) { }

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
    this.router.navigate(['courses']);
  }
}
