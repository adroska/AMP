import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../../interfaces/course';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCourseComponent implements OnInit {
  public course: Course;
  public form: FormGroup;

  public constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit() {
    this.form = this.formBuilder.group({
      title: ['',
        [Validators.required,
         Validators.maxLength(50)]],
      description: ['',
        [Validators.required,
         Validators.maxLength(500)]],
      creationDate: ['', Validators.required],
      duration: ['', Validators.required],
      author: ['', Validators.required]
    });
    this.course = { 
      id: 0,
      title: '',
      duration: 0,
      creationDate: new Date(),
      description: '',
      topRated: false
    };
  }

  public save(formData: FormGroup) {
    console.log('Add Course Component - Save\n',formData.value);
  }

  public cancel() {
    console.log('Add Course Component - Cancel');
    this.router.navigate(['courses']);
  }
}
