import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, mergeMap, tap} from "rxjs/operators";
import { UserInfoActionType } from "src/app/components/models/userInfo-action.model";
import { StorageService } from "../../storage/storage.service";
import * as userInfoListActions from '../actions/userInfo.actions';
@Injectable()

export class UserInfoEffects { 

    loadUserInfoList$ = createEffect(() =>
    this.action$.pipe(
      ofType(UserInfoActionType.GET_USER_INFO_DATA),
      mergeMap(() => this.storageService.getUserInfoDataJSON()
        .pipe(
          map(userInfo => userInfoListActions.GetUserInfoListSuccess({payload: userInfo})),
          catchError(() => of({ type: UserInfoActionType.GET_USER_INFO_DATA_FAILURE, error: 'Error while data fetch' }))
        )
      )
    )
    );


    constructor(private action$: Actions, private storageService: StorageService){}

}