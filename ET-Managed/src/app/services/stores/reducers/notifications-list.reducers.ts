import { not } from "@angular/compiler/src/output/output_ast";
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
    }),
    on(NotificationListActions.UpdateNotificationItem, (state: notificationState, { payload }) => {
        return {
            ...state,
            notificationList: state.notificationList.map(notificationItem => notificationItem.id === payload
            ? { 
                 ...notificationItem, 
                 isExpanded: !notificationItem.isExpanded
              }
            : notificationItem)
        }
    })
    )


export function notificationsListReducers(state: notificationState = initialNotificationsList, action: Action) {
    return reducer(state, action)
}



