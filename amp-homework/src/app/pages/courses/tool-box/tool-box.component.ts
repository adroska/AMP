import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Course } from '../../../interfaces/course';
import { courses } from '../../../mock-data/courses';
import { ChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';

@Component({
  selector: 'app-tool-box',
  templateUrl: './tool-box.component.html',
  styleUrls: ['./tool-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
