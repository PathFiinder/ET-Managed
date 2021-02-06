export enum ActionType {
    GET_NAVIGATION_LIST = 'GET_LIST'
}

export class NavigationPanelAction {
    private type: ActionType;

    constructor(type: ActionType){
        this.type = type;
    }

    public getType(): ActionType {
        return this.type;
    }
}