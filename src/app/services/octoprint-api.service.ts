import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {OctoprintApi} from 'octoprint-api';
import {Store} from '@ngrx/store';
import {PrinterState} from '../core-data/printer/printer.reducer';
import {PrinterActions} from '../core-data/printer';

@Injectable({
  providedIn: 'root',
})
export class OctoprintApiService {
  public Octopi = new OctoprintApi(environment.printerApiKey, environment.printerApiUrl);

  constructor(private store: Store<PrinterState>) {}

  public getStatus(): void {
    this.store.dispatch(PrinterActions.getStatus());
  }
}
