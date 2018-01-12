import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent implements OnInit {

  public constructor() { }

  public ngOnInit() {
  }

}
