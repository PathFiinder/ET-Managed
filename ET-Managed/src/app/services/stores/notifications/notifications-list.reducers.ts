import { createReducer, on, Action } from "@ngrx/store";
import { NotificationItem, NotificationItemCategory, NotificationListItem} from "src/app/components/models/notifications-list.model";

import * as NotificationListActions from "./notifications-list.actions";

const initialNotificationsList: NotificationListItem = {notificationListItem: [
        new NotificationItem(0, 'Notification 1','Notification 1 about something', NotificationItemCategory.IRRELEVANT, false),
        new NotificationItem(1, 'Notification 2','Notification 2 about something', NotificationItemCategory.NORMAL, false),
        new NotificationItem(2, 'Notification 3','Notification 3 about something', NotificationItemCategory.IMPORTANT, false),
        new NotificationItem(3, 'Notification 4','Notification 4 about something', NotificationItemCategory.VERY_IMPORTANT, false),
        
]}

const reducer = createReducer(initialNotificationsList,
    on(NotificationListActions.GetNotificationList, (state: NotificationListItem) => {
        return { ...state }
    }),
    on(NotificationListActions.AddNotificationToList, (state: NotificationListItem, { payload }) => {
        return {
            ...state,
            notificationListItem: [...state.notificationListItem, payload]
        }
    }))


export function notificationsListReducers(state: NotificationListItem = initialNotificationsList, action: Action) {
    return reducer(state, action)
}



