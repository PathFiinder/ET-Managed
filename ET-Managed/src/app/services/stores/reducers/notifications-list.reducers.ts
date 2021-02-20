import { createReducer, on, Action } from "@ngrx/store";
import { NotificationItem} from "src/app/components/models/notifications-list.model";

import * as NotificationListActions from "../actions/notifications-list.actions";

export interface notificationState {
    notificationList: NotificationItem[]
}


const initialNotificationsList: notificationState = {
    notificationList: []
}

const reducer = createReducer(initialNotificationsList,
    on(NotificationListActions.GetNotificationListSuccess, (state: notificationState, {payload}) => {
        return { ...state, notificationList: payload.notificationList}
    }),
    on(NotificationListActions.AddNotificationToList, (state: notificationState, { payload }) => {
        return {
            ...state,
            notificationList: [...state.notificationList, payload]
        }
    }))


export function notificationsListReducers(state: notificationState = initialNotificationsList, action: Action) {
    return reducer(state, action)
}



