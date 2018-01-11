import { Component, OnInit } from '@angular/core';
import { Course } from '../../../interfaces/course';
import { CoursesService } from '../courses.service';
import { FilterByPipe } from '../../../common/filter-by.pipe';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [FilterByPipe]
})
export class CoursesComponent implements OnInit {
    public courses: Course[];
    private coursesOriginal: Course[];

    public constructor(private coursesService: CoursesService,
                private filterByPipe: FilterByPipe) {
    }

    public ngOnInit() {
        this.courses = this.coursesService.getList();
        this.coursesOriginal = this.courses;
    }

    private deleteCourse(event) {
        this.coursesService.removeItemById(event.id);
    }

    public filterCourses(text) {
        this.courses = this.filterByPipe.transform(this.coursesOriginal, 'title', text);
    }
}
