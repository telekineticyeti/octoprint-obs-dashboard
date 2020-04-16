import { Component, OnInit } from "@angular/core";
import { OctoprintApiService } from "src/app/services/octoprint-api.service";

@Component({
  selector: "app-job-progress",
  template: `
    <p>
      job-progress works!
    </p>
  `,
  styleUrls: ["job-progress.component.scss"],
})
export class JobProgressComponent implements OnInit {
  constructor(public octoService: OctoprintApiService) {}

  ngOnInit(): void {}
}
