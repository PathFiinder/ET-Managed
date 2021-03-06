export enum NavigationListItem {
    OVERVIEW = 'Overview',
    TASKS = 'Tasks',
    BUDGET = 'Budget',
    CHARTS = 'Charts',
    CALENDAR = 'Calendar'
}

export enum NavigationListItemIconClass {
    OVERVIEW_ICON = 'far fa-sticky-note',
    TASKS_ICON = 'far fa-clipboard',
    BUDGET_ICON = 'far fa-credit-card',
    CHARTS_ICON = 'fas fa-chart-line',
    CALENDAR_ICON = 'far fa-calendar'
}

export class NavigationItem {
    constructor(public name: NavigationListItem, public iconClass: NavigationListItemIconClass, public isActive: boolean, public path: string) {}
}

export class NavigationList {
    navigationList: NavigationItem[]
}