export enum NavigationListItem {
    OVERVIEW = 'Overview',
    TASKS = 'Tasks',
    BUDEGT = 'Budget',
    CHARTS = 'Charts',
    CALENDAR = 'Calendar'
}

export class NavigationItem {
    constructor(public name: NavigationListItem) {}
}

export class NavigationList {
    navigationList: NavigationItem[]
}