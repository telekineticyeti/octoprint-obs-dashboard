import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { OctoprintApi } from "octoprint-api";

@Injectable({
  providedIn: "root",
})
export class OctoprintApiService {
  private Octopi = new OctoprintApi(
    environment.printerApiKey,
    environment.printerApiUrl
  );

  constructor() {
    this.Octopi.getCameras().then((r) => {
      console.log(r);
    });
  }
}
