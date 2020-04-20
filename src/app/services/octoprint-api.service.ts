import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {OctoprintApi} from 'octoprint-api';
import {Store} from '@ngrx/store';
import {PrinterState} from '../core-data/printer/printer.reducer';
import {PrinterActions, JobActions} from '../core-data/actions';
import {JobState} from '../core-data/job/job.reducer';
import {State, PrinterSelectors, JobSelectors} from '../core-data/reducers';

@Injectable({
  providedIn: 'root',
})
export class OctoprintApiService {
  public Octopi = new OctoprintApi(environment.printerApiKey, environment.printerApiUrl);
  public printerPollingInterval = 2500; // How often the Octoprint Server should be polled for printer status in MS.

  public jobStatus$?: JobState;
  public printerStatus$?: PrinterState;

  constructor(private store: Store<State>) {
    store.select(PrinterSelectors.printer).subscribe(result => {
      this.printerStatus$ = result;
    });
    store.select(JobSelectors.job).subscribe(result => {
      this.jobStatus$ = result;
    });
  }

  public getPrinterStatus(): void {
    this.store.dispatch(PrinterActions.getStatus());
  }

  public getJobStatus(): void {
    this.store.dispatch(JobActions.getStatus());
  }

  public startPolling(): void {
    this.store.dispatch(PrinterActions.startPolling());
  }

  public stopPolling(): void {
    this.store.dispatch(PrinterActions.stopPolling());
  }
}
