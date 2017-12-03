import { Component, OnInit } from '@angular/core';
import { Course } from '../../../interfaces/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
    public courses: Course[];

    constructor() {
    }

    ngOnInit() {
        this.courses = [
        {
            id: 1,
            title: 'Video course 1',
            duration: 88,
            creationDate: new Date(),
            description: 'Description of video course 1'
        },
        {
            id: 2,
            title: 'Video course 2',
            duration: 15,
            creationDate: new Date(),
            description: 'Description of video course 2'
        },
        {
            id: 3,
            title: 'Video course 3',
            duration: 135,
            creationDate: new Date(),
            description: 'Description of video course 3'
        }
    ];
}

}
