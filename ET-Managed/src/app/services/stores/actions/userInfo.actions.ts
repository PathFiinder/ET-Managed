import { createAction, props } from "@ngrx/store";
import { UserInfoActionType } from "src/app/components/models/userInfo-action.model";



export const GetUserInfoList = createAction(UserInfoActionType.GET_USER_INFO_DATA);

export const GetUserInfoListSuccess = createAction(UserInfoActionType.GET_USER_INFO_DATA, props<{payload: any}>())