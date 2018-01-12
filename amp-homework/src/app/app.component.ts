import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core/src/change_detection/constants';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
