export enum ActionType {
    GET_NAVIGATION_LIST = '[NAVIGATION] GET_LIST',
    GET_NAVIGATION_LIST_SUCCESS = '[NAVIGATION] GET_LIST SUCCESS',
    GET_NAVIGATION_LIST_FAILURE = '[NAVIGATION] GET_LIST FAILURE',
}
export class NavigationPanelAction {
    constructor(type: ActionType){}
}