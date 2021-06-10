
export interface SystemData {
    loggedUser: LoggedUser,
    applicationData: ApplicationData,
    userData: UserData
}

export interface LoggedUser {
    userId: number,
    userName: string,
    userLastName: string,
    nickName: string,
    avatarId: number,
    email: string
}

export interface ApplicationData {
    navigationList: NavigationItem[],
    systemInfo: SystemInfo,
    menuExpanded: boolean
}

export interface NavigationItem {
    name: string,
    iconClass: string,
    isActive: string,
    path: string
}

export interface SystemInfo {
    title: string,
    author: string,
    version: string,
    lastUpdate: string,
    copyrights: string
}

export interface UserData {
    notificationData: NotificationData
    tasksData: TaskData,
    budgetData: BudgetData,
    chartsData: ChartsData,
    calendarData: CalendarData
}

export interface NotificationData {
    notificationList: NotificationItem[],
    isNewNotification: boolean
}

export interface NotificationItem {
    id: number,
    nameShort: string,
    nameLong: string,
    category: NotificationItemCategory,
    isExpanded: boolean,
    isActive: boolean
}

export enum NotificationItemCategory {
    IRRELEVANT = 'Irrelevant',
    NORMAL = 'Normal',
    IMPORTANT = 'Important',
    VERY_IMPORTANT = 'Very Important'
}

export interface TaskData {
    tasksList: TasksItem[]
}

export interface TasksItem { 
}

export interface BudgetData {
    budgetList: BudgetItem[]
}

export interface BudgetItem {
}

export interface ChartsData {
    chartsList: ChartItem[]
}

export interface ChartItem {
}
export interface CalendarData {
    calendarList: CalendarItem[]
}

export interface CalendarItem {
}