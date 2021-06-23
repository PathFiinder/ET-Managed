import { createReducer, on, Action } from '@ngrx/store';
import {  changeActiveNavigationItemById, changeIsMenuExpanded, deleteAllNotifications, deleteNotificationItemById, getSystemDataSuccess, hidePopupsOnNotificationList, updateNotificationIsNew, updateNotificationItemIsActiveById, updateNotificationItemIsExpandedById } from '../actions/system-data.actions';
import { NotificationItem, SystemData } from '../types/systemData.model';

export const initialState: SystemData = {
   loggedUser: null,
   applicationData: {
    navigationList: [], 
    systemInfo: null,
    menuExpanded: null,
    avatarList: []
   },
   userData: {
    notificationData: {
        notificationList: [],
        isNewNotification: false
    },
    tasksData: {
        tasksList: []
    },
    budgetData: {
        budgetList: []
    },
    chartsData: {
        chartsList: []
    },
    calendarData: {
        calendarList: []
    }
   }
};

  const reducer = createReducer(
      initialState,
      on(getSystemDataSuccess, (state: SystemData, {payload}) => {
          return {
              ...state,
              loggedUser: payload.user,
              applicationData: {
                  navigationList: payload.applicationData.navigationList,
                  systemInfo: payload.applicationData.systemInfo,
                  menuExpanded: payload.applicationData.menuExpanded,
                  avatarList: payload.applicationData.avatarList,
                  isTasksReportsActive: payload.applicationData.isTasksReportsActive,
                  isBudgetReportsActice: payload.applicationData.isBudgetReportsActice
              },
              userData: {
                notificationData: payload.userData.notificationData,
                tasksData: payload.userData.tasksData,
                budgetData: payload.userData.budgetData,
                chartsData: payload.userData.chartsData,
                calendarData: payload.userData.calendarData,
              }
          }
      }),
      on(hidePopupsOnNotificationList, (state: SystemData) => { 
        return {
            ...state,
            userData: {
                ...state.userData,
                notificationData: {
                    ...state.userData.notificationData,
                    notificationList: [
                        ...state.userData.notificationData.notificationList.map((notificationItem: NotificationItem) => {
                            return { 
                                ...notificationItem, 
                                isExpanded: false,
                                isActive: false
                            }
                        })],
                    isNewNotification: false
                }
            }
        }
    }),
    on(changeIsMenuExpanded, (state: SystemData) => { 
        return {
            ...state,
            applicationData: {
                ...state.applicationData,
                menuExpanded: !state.applicationData.menuExpanded
            }
        }
    }),
    on(changeActiveNavigationItemById,  (state: SystemData, {itemId}) => { 
        return {
            ...state,
            applicationData: {
                ...state.applicationData,
                navigationList: [
                    ...state.applicationData.navigationList.map(navigationItem => navigationItem.id === itemId
                        ? { 
                             ...navigationItem, 
                             isActive: true,
                          }
                        : { 
                            ...navigationItem, 
                            isActive: false,
                         }),
                ]
            }
        }
    }),
    on(deleteAllNotifications, (state: SystemData) => { 
        return {
            ...state,
            userData: {
                ...state.userData,
                notificationData: {
                    ...state.userData.notificationData,
                    notificationList: []
                }
            }
        }
    }),
    on(updateNotificationIsNew, (state: SystemData) => { 
        return {
            ...state,
            userData: {
                ...state.userData,
                notificationData: {
                    ...state.userData.notificationData,
                    isNewNotification: false
                }
            }
        }
    }),
    on(updateNotificationItemIsActiveById, (state: SystemData, { notificationItemId }) => { 
        return {
            ...state,
            userData: {
                ...state.userData,
                notificationData: {
                    ...state.userData.notificationData,
                    notificationList: [
                        ...state.userData.notificationData.notificationList.map(notificationItem => notificationItem.id === notificationItemId
                            ? { 
                                 ...notificationItem, 
                                 isActive: false
                              }
                            : notificationItem),
                        ],
                    isNewNotification: state.userData.notificationData.notificationList.filter(notificationItem => notificationItem.isActive === true).length <= 1 ? false : true     
                    }
                }
            }
    }),
    on(updateNotificationItemIsExpandedById, (state: SystemData, {notificationItemId}) => { 
        return {
            ...state,
            userData: {
                ...state.userData,
                notificationData: {
                    ...state.userData.notificationData,
                    notificationList: [
                        ...state.userData.notificationData.notificationList.map((notificationItem: NotificationItem) => notificationItem.id === notificationItemId
                            ? { 
                                ...notificationItem, 
                                isExpanded: !notificationItem.isExpanded
                            }
                        : notificationItem)

                        ]
                }
            }
        }
    }),
    on(deleteNotificationItemById, (state: SystemData, { notificationItemId }) => { 
        return {
            ...state,
            userData: {
                ...state.userData,
                notificationData: {
                    ...state.userData.notificationData,
                    notificationList: state.userData.notificationData.notificationList.filter(notificationItem => notificationItem.id !== notificationItemId)
                }
            }
        }
    })
  )

  export function systemDataReducer(state: SystemData = initialState, action: Action) {
    return reducer(state, action)
  }