import { createReducer, on, Action } from '@ngrx/store';
import { NavigationItem } from '../../../components/models/naviagation-list.model';
import * as NavigationPanelListActions from '../actions/navigation-panel.actions';

export interface navigationState {
    navigationList: NavigationItem[]
}


const initialNavigationList: navigationState = {
    navigationList: []
}


const reducer = createReducer(initialNavigationList,
    on(NavigationPanelListActions.GetNavigationListSuccess, (state: navigationState, {payload}) => {
        return { ...state, 
                navigationList:  payload.navigationList}
    }))


export function navigationListReducers(state: navigationState = initialNavigationList, action: Action) {
    return reducer(state, action)
}


