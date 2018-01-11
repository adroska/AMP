import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../interfaces/course';
import { BorderColorDirective } from '../../../common/border-color.directive';
import { ChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';

@Component({
    selector: 'app-course-details',
    templateUrl: './course-details.component.html',
    styleUrls: ['./course-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CourseDetailsComponent implements OnInit {
    @Input('course') course: Course;
    @Output('delClick') deleteClick = new EventEmitter();

    public constructor() { }

    public ngOnInit() {
    }

    public deleteCourse() {
        this.deleteClick.emit({
            id: this.course.id
        });
    }
}
