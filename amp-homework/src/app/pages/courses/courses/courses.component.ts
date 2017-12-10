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

    constructor(private CoursesService: CoursesService) {
    }

    ngOnInit() {
        this.courses = this.CoursesService.getList();
    }

    deleteCourse(event) {
        this.CoursesService.removeItemById(event.id);
    }
}
