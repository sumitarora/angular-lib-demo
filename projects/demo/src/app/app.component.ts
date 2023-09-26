import { Component } from '@angular/core';
import { UiService } from 'ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  constructor(private uiService: UiService) {
    console.log(this.uiService.sayHello());
  }
}
