import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../interfaces/course';

@Component({
    selector: 'app-course-details',
    templateUrl: './course-details.component.html',
    styleUrls: ['./course-details.component.scss']
})

export class CourseDetailsComponent implements OnInit {
    @Input('course') course: Course;
    @Output('delClick') deleteClick = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    deleteCourse() {
        this.deleteClick.emit({
            value: this.course.id
        });
    }
}
