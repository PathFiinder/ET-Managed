import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap, take, tap } from "rxjs/operators";
import { NotificationActionType } from "src/app/components/models/notification-panel-action.model";
import { StorageService } from "../../storage/storage.service";
import * as notificationActions from '../actions/notifications-list.actions'
@Injectable()

export class NotificationEffects { 

    loadNavigationList$ = createEffect(() =>
    this.action$.pipe(
      ofType(NotificationActionType.GET_NOTIFICATIONS_LIST),
      mergeMap(() => this.storageService.getotificationDataJSON()
        .pipe(
          map(notificationList => notificationActions.GetNotificationListSuccess({payload: notificationList})),
          catchError(() => of({ type: NotificationActionType.GET_NOTIFICATIONS_LIST_FAILURE, error: 'Error while data fetch' }))
        )
      )
    )
  );

    constructor(private action$: Actions, private storageService: StorageService){}

}