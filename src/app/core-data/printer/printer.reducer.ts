import {Action, createReducer, on} from '@ngrx/store';
import {PrinterActions} from '../actions';

export interface PrinterState {
  printing: boolean;
  bed: {
    actualTemp: number;
    targetTemp: number;
  };
  extruder: {
    actualTemp: number;
    targetTemp: number;
  };
}

const initialState: PrinterState = {
  printing: false,
  bed: {
    actualTemp: 0,
    targetTemp: 0,
  },
  extruder: {
    actualTemp: 0,
    targetTemp: 0,
  },
};

const printerReducer = createReducer(
  initialState,
  on(PrinterActions.getStatusSuccess, (state, {status}) => {
    // console.log(status);
    const extruder = status.tools[Object.keys(status.tools)[0]];

    return {
      ...state,
      printing: status.flags.printing,
      bed: {
        actualTemp: status.bed.actual,
        targetTemp: status.bed.target,
      },
      extruder: {
        actualTemp: extruder.actual,
        targetTemp: extruder.target,
      },
    };
  }),
  on(PrinterActions.getStatusFailure, state => ({...state}))
);

export function PrinterReducer(state: PrinterState | undefined, action: Action) {
  return printerReducer(state, action);
}
