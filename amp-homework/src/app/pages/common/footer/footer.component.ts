import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  public constructor() { }

  public ngOnInit() {
  }

}
