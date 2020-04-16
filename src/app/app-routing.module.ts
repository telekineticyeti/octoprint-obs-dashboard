import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobProgressComponent } from "./components/job-progress/job-progress.component";

const routes: Routes = [{ path: "progress", component: JobProgressComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
