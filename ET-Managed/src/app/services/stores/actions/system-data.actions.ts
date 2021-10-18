import { createAction, props } from "@ngrx/store";
import {SystemDataActionType, NotificationActionType, BudgetActionType} from "../models/system-data-actions.model";


export const getSystemData = createAction(SystemDataActionType.GET_SYSTEM_DATA);
export const getSystemDataSuccess = createAction(SystemDataActionType.GET_SYSTEM_DATA_SUCCESS, props<{payload: any}>());

export const hidePopupsOnNotificationList = createAction(NotificationActionType.HIDE_NOTIFICATIONS);
export const deleteAllNotifications = createAction(NotificationActionType.DELETE_NOTIFICATIONS);
export const deleteNotificationItemById =
  createAction(NotificationActionType.DELETE_NOTIFICATION_BY_ID, props<{notificationItemId: number}>());
export const changeIsMenuExpanded = createAction(NotificationActionType.CHANGE_IS_MENU_EXPANDED);
export const changeActiveNavigationItemById =
  createAction(NotificationActionType.CHANGE_ACTIVE_NAVIGATION_ITEM_BY_ID, props<{itemId: number}>());

export const updateNotificationIsNew = createAction(NotificationActionType.UPDATE_NOTIFICATION_IS_NEW);
export const updateNotificationItemIsActiveById =
  createAction(NotificationActionType.UPDATE_NOTIFICATION_ITEM_IS_ACTIVE, props<{notificationItemId: number}>());
export const updateNotificationItemIsExpandedById =
  createAction(NotificationActionType.UPDATE_NOTIFICATION_ITEM_IS_EXPANDED, props<{notificationItemId: number}>());
export const updateTotalMonthBudgetValueByRange =
  createAction(BudgetActionType.UPDATE_BUDGET_MONTH_TOTAL_INCOME, props<{range: string, monthBudget: number}>());
