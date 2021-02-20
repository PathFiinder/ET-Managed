import { createAction, props } from "@ngrx/store";
import { ActionType } from "../../../components/models/navigation-panel-action.model";



export const GetNavigationListSuccess = createAction(ActionType.GET_NAVIGATION_LIST_SUCCESS, props<{payload: any}>());
export const GetNavigationListFailure = createAction(ActionType.GET_NAVIGATION_LIST_FAILURE, props<{error}>());