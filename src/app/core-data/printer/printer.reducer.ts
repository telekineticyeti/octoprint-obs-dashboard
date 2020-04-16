import {Action, createReducer, on} from '@ngrx/store';
import * as PrinterActions from './printer.actions';

export interface PrinterState {
  status: string;
}

const initialState: PrinterState = {
  status: '',
};

const printerReducer = createReducer(
  initialState,
  on(PrinterActions.getStatusSuccess, (state, {payload}) => ({
    ...state,
    status: payload,
  })),
  on(PrinterActions.getStatusFailure, state => ({...state}))
);

export function PrinterReducer(state: PrinterState | undefined, action: Action) {
  return printerReducer(state, action);
}
