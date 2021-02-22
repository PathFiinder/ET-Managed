import { createAction, props } from "@ngrx/store";
import { NotificationActionType } from "src/app/components/models/notification-panel-action.model";
import { NotificationItem } from "src/app/components/models/notifications-list.model";

export const GetNotificationListSuccess = createAction(NotificationActionType.GET_NOTIFICATIONS_LIST_SUCCESS, props<{payload: any}>())

export const AddNotificationToList = createAction(NotificationActionType.ADD_NOTIFICATION, props<{payload: NotificationItem}>())

export const UpdateNotificationItem = createAction(NotificationActionType.UPDATE_NOTIFICATION_ITEM, props<{payload: number}>())
