import { createAction, props } from "@ngrx/store";
import { NotificationActionType } from "src/app/components/models/notification-panel-action.model";
import { NotificationItem } from "src/app/components/models/notifications-list.model";

export const GetNotificationList = createAction(NotificationActionType.GET_NOTIFICATIONS_LIST, props<{payload: any}>())

export const AddNotificationToList = createAction(NotificationActionType.UPDATE_NOTIFICATION, props<{payload: NotificationItem}>())
