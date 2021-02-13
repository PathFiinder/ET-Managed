export enum NotificationActionType {
    GET_NOTIFICATIONS_LIST = 'GET_NOTIFICATIONS_LIST',
    UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION',
    DELETE_NOTIFICATION = 'DELETE NOTIFICATION',
    DELETE_NOTIFICATIONS = 'DELETE_NOTIFICATIONS'
}
export class NotificationAction {
    constructor(type: NotificationActionType){}
}