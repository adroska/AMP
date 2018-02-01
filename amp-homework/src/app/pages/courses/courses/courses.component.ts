import { Component, OnInit } from '@angular/core';
import { Course } from '../../../interfaces/course';
import { CoursesService } from '../courses.service';
import { FilterByPipe } from '../../../common/filter-by.pipe';
import { ChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [FilterByPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit {
    public courses: Observable<Course[]>;
    private coursesOriginal: Course[];
    private subscription: Subscription;

    public constructor(
        public coursesService: CoursesService,
        private filterByPipe: FilterByPipe) {
    }

    public ngOnInit() {
        this.courses = this.coursesService.getList();
    }

    private deleteCourse(event) {
        this.coursesService.removeItemById(event.id);
    }

    public filterCourses(text) {
        //this.courses = this.filterByPipe.transform(this.coursesOriginal, 'title', text);
    }
}
