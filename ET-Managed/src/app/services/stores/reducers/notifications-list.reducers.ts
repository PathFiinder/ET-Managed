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
        return { ...state, notificationList: payload.notificationList, isNewNotification: payload.isNewNotification}
    }),
    on(NotificationListActions.AddNotificationToList, (state: notificationState, { payload }) => {
        return {
            ...state,
            notificationList: [...state.notificationList, payload],
            isNewNotification: true
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
    }),
    on(NotificationListActions.UpdateNotificationItemIsActive, (state: notificationState, { payload }) => {
        return {
            ...state,
            notificationList: state.notificationList.map(notificationItem => notificationItem.id === payload
            ? { 
                 ...notificationItem, 
                 isActive: false
              }
            : notificationItem),
            isNewNotification: state.notificationList.filter(notificationItem => notificationItem.id === payload && notificationItem.isActive).length !== 0 ? false : true
        }
    }),
    on(NotificationListActions.UpdateNotificationIsNew, (state: notificationState) => {
        return {
            ...state,
            isNewNotification: false
        }
    }),
    on(NotificationListActions.DeleteNotification, (state: notificationState, {payload}) => {
        return {
            ...state,
            notificationList: state.notificationList.filter(notificationItem => notificationItem.id !== payload)
        }
    }),
    on(NotificationListActions.DeleteAllNotifications, (state: notificationState) => {
        return {
            ...state,
            notificationList: []
        }
    }),
    on(NotificationListActions.HidePopupsOnNotificationList, (state: notificationState) => { 
        return {
            ...state,
            notificationList: state.notificationList.map(notificationItem => notificationItem.isExpanded === true
                ? { 
                     ...notificationItem, 
                     isExpanded: false
                  }
                : notificationItem)
        }
    }))


export function notificationsListReducers(state: notificationState = initialNotificationsList, action: Action) {
    return reducer(state, action)
}



