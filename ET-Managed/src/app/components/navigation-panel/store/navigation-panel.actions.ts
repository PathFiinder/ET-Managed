import { Action } from "@ngrx/store";
import { ActionType } from "../../models/navigation-panel-action.model";

export class GetNavigationList implements Action {
    readonly type = ActionType.GET_NAVIGATION_LIST;
}