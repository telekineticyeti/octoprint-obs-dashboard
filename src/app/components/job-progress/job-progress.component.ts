import {Component, OnInit} from '@angular/core';
import {OctoprintApiService} from 'src/app/services/octoprint-api.service';

@Component({
  selector: 'app-job-progress',
  templateUrl: './job-progress.component.html',
  styleUrls: ['job-progress.component.scss'],
})
export class JobProgressComponent implements OnInit {
  constructor(public octo: OctoprintApiService) {}

  ngOnInit(): void {}
}
