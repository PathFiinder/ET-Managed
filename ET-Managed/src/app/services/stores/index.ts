import { ActionReducerMap } from '@ngrx/store';
import * as fromNavigation from './reducers/navigation-panel.reducers';
import * as fromNotification from './reducers/notifications-list.reducers';

export interface AppState {
    navigationList: fromNavigation.navigationState,
    notificationList: fromNotification.notificationState
}

export const reducers: ActionReducerMap<AppState> = {
    navigationList: fromNavigation.navigationListReducers,
    notificationList: fromNotification.notificationsListReducers
}
