import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-box',
  templateUrl: './tool-box.component.html',
  styleUrls: ['./tool-box.component.scss']
})
export class ToolBoxComponent implements OnInit {
  public searchText: string;

  constructor() { }

  ngOnInit() {
  }

  findCourse() {
    console.log(`${this.searchText}`);
  }

  addCourse() {
  }
}
