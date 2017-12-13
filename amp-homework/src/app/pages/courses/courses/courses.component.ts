import { Component, OnInit } from '@angular/core';
import { Course } from '../../../interfaces/course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
    public courses: Course[];

    constructor(private coursesService: CoursesService) {
    }

    ngOnInit() {
        this.courses = this.coursesService.getList();
    }

    deleteCourse(event) {
        this.coursesService.removeItemById(event.id);
    }
}
