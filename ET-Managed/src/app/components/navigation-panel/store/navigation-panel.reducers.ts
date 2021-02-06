import { NavigationItem, NavigationList, NavigationListItem, NavigationListItemIconClass } from '../../models/naviagation-list.model';
import { ActionType } from '../../models/navigation-panel-action.model';
import * as NavigationPanelListActions from './navigation-panel.actions';

const initialNavigationList: NavigationList = {
    navigationList: [
        new NavigationItem(NavigationListItem.OVERVIEW, NavigationListItemIconClass.OVERVIEW_ICON),
        new NavigationItem(NavigationListItem.TASKS, NavigationListItemIconClass.TASKS_ICON),
        new NavigationItem(NavigationListItem.BUDEGT, NavigationListItemIconClass.BUDEGT_ICON),
        new NavigationItem(NavigationListItem.CHARTS, NavigationListItemIconClass.CHARTS_ICON),
        new NavigationItem(NavigationListItem.CALENDAR, NavigationListItemIconClass.CALENDAR_ICON),
    ]
}


export const actionExecutors: Map<string, (state: NavigationList) => NavigationList> = new Map();
actionExecutors.set(ActionType.GET_NAVIGATION_LIST, getNavigationPanelList);

function getNavigationPanelList(state: NavigationList) {
    return {
        ...state
    };
}

export function navigationListReducers(state: NavigationList = initialNavigationList, action: NavigationPanelListActions.GetNavigationList) {
    if (!actionExecutors.get(action.type)) {
        return state;
    }
    return actionExecutors.get(action.type)(state);
}

