import {ActionReducerMap, MetaReducer, createSelector} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {PrinterState, PrinterReducer} from '../printer/printer.reducer';

export interface State {
  printer: PrinterState;
}

export const reducers: ActionReducerMap<State> = {
  printer: PrinterReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

/**
 * Selector Definitions
 */
export const selectPrinter = (state: State) => state.printer;
export const PrinterSelectors = {
  status: createSelector(selectPrinter, (state: PrinterState) => state.status),
};
