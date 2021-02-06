import { NavigationItem, NavigationList, NavigationListItem } from '../../models/naviagation-list.model';
import { ActionType, NavigationPanelAction } from './navigation-panel-action.model';
import { GetNavigationList } from './navigation-panel.actions';

const initialNavigationList: NavigationList = {
    navigationList: [
        new NavigationItem(NavigationListItem.OVERVIEW),
        new NavigationItem(NavigationListItem.TASKS),
        new NavigationItem(NavigationListItem.BUDEGT),
        new NavigationItem(NavigationListItem.CHARTS),
        new NavigationItem(NavigationListItem.CALENDAR),
    ]
}

const getNavigationList = (state: NavigationList) => {
    return {
        ...state
    }
}

// const navigationListReducersMap = new Map([
//     [ActionType.GET_NAVIGATION_LIST, (state: NavigationList, action: NavigationPanelAction) => getNavigationList(state,action)]
// ])

// navigationListReducersMap.get(action.getType())(state, action)

export function navigationListReducers(state: NavigationList = initialNavigationList, action: NavigationPanelAction) {
    switch(action.getType()) {
        case ActionType.GET_NAVIGATION_LIST: 
            getNavigationList(state);
    }
}