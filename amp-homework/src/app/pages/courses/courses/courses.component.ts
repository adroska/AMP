import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Course } from '../../../interfaces/course';
import { CoursesService } from '../courses.service';
import { FilterByPipe } from '../../../common/filter-by.pipe';
import { ChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

let start = 0;
const defaultCount = 5;

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
    providers: [FilterByPipe],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit {
    public courses: Course[] = [];
    private coursesOriginal: Course[];
    private subscription: Subscription;

    public constructor(
        private coursesService: CoursesService,
        private filterByPipe: FilterByPipe,
        private cd: ChangeDetectorRef) {
    }

    public ngOnInit() {
        this.getCourses(start, defaultCount);
    }

    public showMoreCourse() {
        start += defaultCount;
        this.getCourses(start, defaultCount);
    }

    public getCourses(start: number, count: number) {
        this.subscription = this.coursesService
            .getList(start, count)
            .subscribe((courses) => {
                this.courses = [...this.courses, ...courses];
                this.coursesOriginal = this.courses;
                this.cd.markForCheck();
            });
    }

    private deleteCourse(event) {
        this.coursesService.removeItemById(event.id);
    }

    public filterCourses(text) {
        //this.courses = this.filterByPipe.transform(this.coursesOriginal, 'title', text);
    }
}
