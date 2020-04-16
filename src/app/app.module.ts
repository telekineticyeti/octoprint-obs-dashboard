import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {JobProgressComponent} from './components/job-progress/job-progress.component';
import {CoreDataModule} from './core-data/core-data.module';

@NgModule({
  declarations: [AppComponent, JobProgressComponent],
  imports: [BrowserModule, AppRoutingModule, CoreDataModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
