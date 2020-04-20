import {createAction, props} from '@ngrx/store';
import {IPrinterStatus} from 'octoprint-api/dist/interfaces';

export const getStatus = createAction('[Printer] get status');
export const getStatusSuccess = createAction(
  '[Printer] get status success',
  props<{status: IPrinterStatus}>()
);
export const getStatusFailure = createAction('[Printer] get status fail', props<Error>());
export const startPolling = createAction('[Printer] Start Polling for Status');
export const stopPolling = createAction('[Printer] Stop Polling for Status');
