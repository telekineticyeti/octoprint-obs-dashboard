import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, from, of} from 'rxjs';
import {OctoprintApiService} from 'src/app/services/octoprint-api.service';
import {PrinterActions} from '.';
import {mergeMap, catchError, map} from 'rxjs/operators';

@Injectable()
export class PrinterEffects {
  constructor(private actions$: Actions, private printService: OctoprintApiService) {}

  GetPrinterStatus$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      // tap(action => console.log(`Received ${action.type}`)),
      ofType(PrinterActions.getStatus),
      mergeMap(() =>
        from(this.printService.Octopi.getStatus()).pipe(
          map(status => PrinterActions.getStatusSuccess({status})),
          catchError((err: Error) => of(PrinterActions.getStatusFailure(err)))
        )
      )
    )
  );
}
