import { createReducer, on, Action } from '@ngrx/store';
import { SingleUser } from 'src/app/components/models/userInfo.model';
import * as userInfoListActions from '../actions/userInfo.actions';

export interface userInfoState {
    userInfo: SingleUser | undefined
}


const initialUserInfoList: userInfoState = {
    userInfo: undefined
}


const reducer = createReducer(initialUserInfoList,
    on(userInfoListActions.GetUserInfoListSuccess, (state: userInfoState, {payload}) => {
        return { ...state, 
            //userInfo:  payload.userInfo
        }
    }))


export function userInfoListReducers(state: userInfoState = initialUserInfoList, action: Action) {
    return reducer(state, action)
}


