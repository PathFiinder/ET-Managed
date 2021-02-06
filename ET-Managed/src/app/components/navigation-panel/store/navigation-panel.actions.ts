import { Action } from "@ngrx/store";
import { NavigationItem } from "../../models/naviagation-list.model";
import { ActionType } from "./navigation-panel-action.model";

export class GetNavigationList implements Action {
    readonly type = ActionType.GET_NAVIGATION_LIST;
}