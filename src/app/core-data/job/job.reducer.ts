import {Action, createReducer, on} from '@ngrx/store';
import {JobActions} from '../actions';

export interface JobState {
  estimatedTime: number | null;
  completionPercentage: number | null;
  state: string | null;
  file: {
    name: string | null;
    size: number | null;
    date: number | null;
  };
}

const initialState: JobState = {
  estimatedTime: null,
  completionPercentage: null,
  state: null,
  file: {
    name: null,
    size: null,
    date: null,
  },
};

const jobReducer = createReducer(
  initialState,
  on(JobActions.getStatusSuccess, (state, {status}) => {
    return {
      ...state,
      estimatedTime: status.job.estimatedPrintTime,
      completionPercentage: status.progress.completion,
      state: status.state,
      file: {
        name: status.job.file.name,
        size: status.job.file.size,
        date: status.job.file.date,
      },
    };
  })
);

export function JobReducer(state: JobState | undefined, action: Action) {
  return jobReducer(state, action);
}
