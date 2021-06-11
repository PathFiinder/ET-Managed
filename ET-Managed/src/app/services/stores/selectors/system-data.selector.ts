import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as models from '../types/systemData.model';
 

const selectSystemDataState = createFeatureSelector<any, models.SystemData>('system-data');
 
export const selectCurrentUser = createSelector<any, models.SystemData, models.LoggedUser> (
    selectSystemDataState,
    (state: models.SystemData) => state.loggedUser
);

export const selectApplicationData = createSelector<any, models.SystemData, models.ApplicationData> (
    selectSystemDataState,
    (state: models.SystemData) => state.applicationData
);

export const selectNavigationList = createSelector<any, models.ApplicationData, models.NavigationItem[]> (
    selectApplicationData,
    (applicationData: models.ApplicationData) => applicationData.navigationList
);

export const selectNavigationItemById = createSelector<any, number, models.NavigationItem[], models.NavigationItem> (
    selectNavigationList,
    (navigationItems: models.NavigationItem[], index: number) => navigationItems[index]
);

export const selectSystemInfo = createSelector<any, models.ApplicationData, models.SystemInfo>(
    selectApplicationData,
    (applicationData: models.ApplicationData) => applicationData.systemInfo
)

export const selectIsMenuExpanded = createSelector<any, models.ApplicationData, boolean>(
    selectApplicationData,
    (applicationData: models.ApplicationData) => applicationData.menuExpanded
)

export const selectAvatarList = createSelector<any, models.ApplicationData, models.AvatarItem[]>(
    selectApplicationData,
    (applicationData: models.ApplicationData) => applicationData.avatarList
)

export const selectNavigationItemByName = createSelector<any, string, models.NavigationItem[], models.NavigationItem> (
    selectNavigationList,
    (navigationItems: models.NavigationItem[], itemName: string) =>  navigationItems.find(item => item.name === itemName)
);

export const selectUserData = createSelector<any, models.SystemData, models.UserData>(
    selectSystemDataState,
    (state: models.SystemData) => state.userData
);

export const selectNotificationData = createSelector<any, models.UserData, models.NotificationData>(
    selectUserData,
    (userData: models.UserData) => userData.notificationData
);

export const selectNotificationList = createSelector<any, models.NotificationData, models.NotificationItem[]>(
    selectNotificationData,
    (notificationData: models.NotificationData) => notificationData.notificationList
);

export const selectNotificationItemById = createSelector<any, number, models.NotificationItem[], models.NotificationItem>(
    selectNotificationList,
    (notificationList: models.NotificationItem[], index: number) => notificationList[index]
);

export const selectAllNotificationItemsByCategory = createSelector<any, models.NotificationItemCategory, models.NotificationItem[], models.NotificationItem | models.NotificationItem[]>(
    selectNotificationList,
    (notificationList: models.NotificationItem[], category: models.NotificationItemCategory) => notificationList.filter(item => item.category === category)
);

export const selectAllExpandedNotificationItems = createSelector<any, models.NotificationItem[], models.NotificationItem | models.NotificationItem[]> (
    selectNotificationList,
    (notificationList: models.NotificationItem[]) => notificationList.filter(item => item.isExpanded == true)
);

export const selectActiveNotificationItem = createSelector<any, models.NotificationItem[], models.NotificationItem | models.NotificationItem[]> (
    selectNotificationList,
    (notificationList: models.NotificationItem[]) => notificationList.filter(item => item.isActive == true)
);

export const selectIsNewNotification = createSelector<any, models.NotificationData, boolean> (
    selectNotificationData,
    (notificationData: models.NotificationData) => notificationData.isNewNotification
);

export const selectTasksData = createSelector<any, models.UserData, models.TaskData>(
    selectUserData,
    (userData: models.UserData) => userData.tasksData
);

export const selectTasksList = createSelector<any, models.TaskData, models.TasksItem[]>(
    selectTasksData,
    (tasksData: models.TaskData) => tasksData.tasksList
);

export const selectBudgetData = createSelector<any, models.UserData, models.BudgetData>(
    selectUserData,
    (userData: models.UserData) => userData.budgetData
);

export const selectBudgetList = createSelector<any, models.BudgetData, models.BudgetItem[]>(
    selectBudgetData,
    (budgetData: models.BudgetData) => budgetData.budgetList
);

export const selectChartsData = createSelector<any, models.UserData, models.ChartsData>(
    selectUserData,
    (userData: models.UserData) => userData.chartsData
);

export const selectChartsList = createSelector<any, models.ChartsData, models.ChartItem[]>(
    selectChartsData,
    (chartsData: models.ChartsData) => chartsData.chartsList
);

export const selectCalendarData = createSelector<any, models.UserData, models.CalendarData>(
    selectUserData,
    (userData: models.UserData) => userData.calendarData
);

export const selectCalendarList = createSelector<any, models.CalendarData, models.CalendarItem[]>(
    selectCalendarData,
    (calendarData: models.CalendarData) => calendarData.calendarList
);
