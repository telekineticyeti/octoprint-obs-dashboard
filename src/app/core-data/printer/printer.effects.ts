import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, from, of, interval} from 'rxjs';
import {mergeMap, catchError, map, takeUntil} from 'rxjs/operators';
import {OctoprintApiService} from 'src/app/services/octoprint-api.service';
import {PrinterActions, JobActions} from '../actions';

@Injectable()
export class PrinterEffects {
  private printerPollingTimer$ = interval(this.printService.printerPollingInterval);

  constructor(private actions$: Actions, private printService: OctoprintApiService) {}

  StartPrinterPolling$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrinterActions.startPolling),
      mergeMap(() =>
        this.printerPollingTimer$.pipe(
          map(_ => PrinterActions.getStatus()),
          takeUntil(this.actions$.pipe(ofType(PrinterActions.stopPolling)))
        )
      )
    )
  );

  GetPrinterStatus$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrinterActions.getStatus),
      mergeMap(() =>
        from(this.printService.Octopi.getStatus()).pipe(
          map(status => PrinterActions.getStatusSuccess({status})),
          catchError((err: Error) => of(PrinterActions.getStatusFailure(err)))
        )
      )
    )
  );

  /**
   * Uses the same getStatus() as the Printer action above to retrieve the job status.
   */
  GetJobStatus$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(PrinterActions.getStatus),
      mergeMap(() =>
        from(this.printService.Octopi.getJobInfo()).pipe(
          map(status => JobActions.getStatusSuccess({status})),
          catchError((err: Error) => of(JobActions.getStatusFailure(err)))
        )
      )
    )
  );
}
