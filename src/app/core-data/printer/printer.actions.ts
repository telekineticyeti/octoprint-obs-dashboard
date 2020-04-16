import { createAction, props } from "@ngrx/store";

export const getStatus = createAction("[Printer] get status");
export const getStatusSuccess = createAction(
  "[Printer] get status success",
  props<{ payload: string }>()
);
export const getStatusFailure = createAction(
  "[Printer] get status fail",
  props<Error>()
);
