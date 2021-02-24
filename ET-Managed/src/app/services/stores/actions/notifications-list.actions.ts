import { createAction, props } from "@ngrx/store";
import { NotificationActionType } from "src/app/components/models/notification-panel-action.model";
import { NotificationItem } from "src/app/components/models/notifications-list.model";

export const GetNotificationList = createAction(NotificationActionType.GET_NOTIFICATIONS_LIST);

export const GetNotificationListSuccess = createAction(NotificationActionType.GET_NOTIFICATIONS_LIST_SUCCESS, props<{payload: any}>())

export const AddNotificationToList = createAction(NotificationActionType.ADD_NOTIFICATION, props<{payload: NotificationItem}>())

export const UpdateNotificationItem = createAction(NotificationActionType.UPDATE_NOTIFICATION_ITEM, props<{payload: number}>())

export const UpdateNotificationItemIsActive = createAction(NotificationActionType.UPDATE_NOTIFICATION_ITEM_IS_ACTIVE, props<{payload: number}>())

export const UpdateNotificationIsNew = createAction(NotificationActionType.UPDATE_IS_NEW_NOTIFICATION);

export const DeleteNotification = createAction(NotificationActionType.DELETE_NOTIFICATION, props<{payload: number}>())

export const DeleteAllNotifications = createAction(NotificationActionType.DELETE_NOTIFICATIONS);

export const HidePopupsOnNotificationList = createAction(NotificationActionType.HIDE_NOTIFICATIONS);
