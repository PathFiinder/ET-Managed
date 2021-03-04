import { ActionReducerMap } from '@ngrx/store';
import * as fromNavigation from './reducers/navigation-panel.reducers';
import * as fromNotification from './reducers/notifications-list.reducers';
import * as fromUserInfo from './reducers/userInfo.reducers';

export interface AppState {
    navigationList: fromNavigation.navigationState,
    notificationList: fromNotification.notificationState,
    userInfo: fromUserInfo.userInfoState
}

export const reducers: ActionReducerMap<AppState> = {
    navigationList: fromNavigation.navigationListReducers,
    notificationList: fromNotification.notificationsListReducers,
    userInfo: fromUserInfo.userInfoListReducers
}
