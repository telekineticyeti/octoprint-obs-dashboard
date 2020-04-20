import {Component, OnInit} from '@angular/core';
import {OctoprintApiService} from './services/octoprint-api.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [],
})
export class AppComponent implements OnInit {
  constructor(public printService: OctoprintApiService) {}

  public ngOnInit(): void {
    this.printService.startPolling();

    // setTimeout(() => {
    //   this.printService.stopPolling();
    // }, 2000);
  }
}
