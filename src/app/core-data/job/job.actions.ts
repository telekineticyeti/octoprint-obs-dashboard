import {createAction, props} from '@ngrx/store';
import {IJob} from 'octoprint-api/dist/interfaces';

export const getStatus = createAction('[Job] get status');
export const getStatusSuccess = createAction('[Job] get status success', props<{status: IJob}>());
export const getStatusFailure = createAction('[Job] get status fail', props<Error>());
