
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
    menuExpanded: boolean,
    avatarList: AvatarItem[]
}

export interface AvatarItem {
    avatarId: number,
    imgSource: string
}
export interface NavigationItem {
    id: number,
    name: string,
    iconClass: string,
    isActive: boolean,
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
    category: CategoryAndPriority,
    isExpanded: boolean,
    isActive: boolean
}

export enum CategoryAndPriority {
    IRRELEVANT = 'Irrelevant',
    NORMAL = 'Normal',
    IMPORTANT = 'Important',
    VERY_IMPORTANT = 'Very Important'
}

export interface TaskData {
    tasksList: TasksItem[]
}

export interface TasksItem {
    id: number,
    shortName: string,
    description: string,
    dataStart: Date,
    dataEnd: Date,
    isDone: boolean,
    isActive: boolean,
    priority: CategoryAndPriority
}

export interface BudgetData {
    budgetList: BudgetItem[]
}

export interface BudgetItem {
    range: string,
    totalBudget: number,
    monthBudgetItems: MonthBudgetItem[]
}

export interface MonthBudgetItem {
    id: number,
    name: string,
    description: string,
    type: MoneyDestination,
    price: number,
    pucharseDate: string,
    priority: CategoryAndPriority,
    category: MoneyCategory,
    paymentMethod: PaymentMethod
}

export enum MoneyDestination {
    EXPENSE = "expense",
    INCOME = "income",
    PLANNING_EXPENSE = 'planning expense'
}

export enum MoneyCategory {
    BILLS = "Bills",
    HOUSE = "House",
    LOAN = "Loan",
    PLANNING = "Planning"
}

export enum PaymentMethod {
    CASH = "cash",
    CREDIT_CARD = "credit-card",
    PAYPAL = "paypal"
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