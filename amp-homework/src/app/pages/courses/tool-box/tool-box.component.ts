import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../interfaces/course';
import { courses } from '../../../mock-data/courses';

@Component({
  selector: 'app-tool-box',
  templateUrl: './tool-box.component.html',
  styleUrls: ['./tool-box.component.scss']
})
export class ToolBoxComponent implements OnInit {
  public searchText: string;
  @Output() filterCourses = new EventEmitter();

  public constructor() { }

  public ngOnInit() {
  }

  public findCourses() {
    this.filterCourses.emit(this.searchText);
  }
}
