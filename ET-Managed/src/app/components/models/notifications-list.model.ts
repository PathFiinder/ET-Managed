

export enum NotificationItemCategory {
    IRRELEVANT = 'Irrelevant',
    NORMAL = 'Normal',
    IMPORTANT = 'Important',
    VERY_IMPORTANT = 'Very Important'
}


export class NotificationItem {
    constructor(public id: number, public nameShort: string, public nameLong: string, public category: NotificationItemCategory, public isExpanded: boolean) {}
}

export class NotificationList {
    notificationList: NotificationItem[]
}