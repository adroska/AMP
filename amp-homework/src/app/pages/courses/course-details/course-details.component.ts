import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../../interfaces/course';

@Component({
    selector: 'app-course-details',
    templateUrl: './course-details.component.html',
    styleUrls: ['./course-details.component.scss']
})

export class CourseDetailsComponent implements OnInit {
    @Input() course: Course;

    constructor() { }

    ngOnInit() {
    }
}
