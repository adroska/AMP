import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class CoursesComponent implements OnInit, OnDestroy {
    public courses: Course[] = [];
    private coursesOriginal: Course[];
    private subscription: Subscription;

    public constructor(
        public coursesService: CoursesService,
        private filterByPipe: FilterByPipe) {
    }

    /*public ngOnInit() {     // WITHOUT HTTP - WORKS
        this.coursesService.getList().subscribe((course) => {
            this.courses.push(course)
        });
    }*/

    public ngOnInit() {     // WITH HTTP - DOESN'T WORK (in the console the courses are there)
        this.subscription = this.coursesService.getList().subscribe((courses) => {
            this.courses = courses;
            this.coursesOriginal = this.courses;

            console.log('****** COURSES ******\n', this.courses);
        });
    }

    private deleteCourse(event) {
        this.coursesService.removeItemById(event.id);
    }

    public filterCourses(text) {
        this.courses = this.filterByPipe.transform(this.coursesOriginal, 'title', text);
    }

    public ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
