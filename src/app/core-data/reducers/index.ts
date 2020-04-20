import {ActionReducerMap, MetaReducer, createSelector} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {PrinterState, PrinterReducer} from '../printer/printer.reducer';
import {JobState, JobReducer} from '../job/job.reducer';

export interface State {
  printer: PrinterState;
  job: JobState;
}

export const reducers: ActionReducerMap<State> = {
  printer: PrinterReducer,
  job: JobReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

/**
 * Selector Definitions
 */
export const selectPrinter = (state: State) => state.printer;
export const PrinterSelectors = {
  printer: createSelector(selectPrinter, (state: PrinterState) => state),
};

export const selectJob = (state: State) => state.job;
export const JobSelectors = {
  job: createSelector(selectJob, (state: JobState) => state),
};
