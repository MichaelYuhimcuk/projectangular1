import { Component } from '@angular/core';
import { InfoService } from './info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  info: { date: string; name: string; topic: string };

  constructor(private infoService: InfoService) {
    this.info = this.infoService.getInfo();
  }
}
