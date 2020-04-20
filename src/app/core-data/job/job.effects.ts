import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, from, of} from 'rxjs';
import {mergeMap, catchError, map} from 'rxjs/operators';
import {OctoprintApiService} from 'src/app/services/octoprint-api.service';
import {JobActions} from '../actions';

@Injectable()
export class JobEffects {
  constructor(private actions$: Actions, private printService: OctoprintApiService) {}

  GetJobStatus$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(JobActions.getStatus),
      mergeMap(() =>
        from(this.printService.Octopi.getJobInfo()).pipe(
          map(status => JobActions.getStatusSuccess({status})),
          catchError((err: Error) => of(JobActions.getStatusFailure(err)))
        )
      )
    )
  );
}
