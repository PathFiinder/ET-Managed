import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from "rxjs";
import { catchError, map, mergeMap, switchMap, take, tap } from "rxjs/operators";
import { ActionType } from "src/app/components/models/navigation-panel-action.model";
import { StorageService } from "../../storage/storage.service";
import * as navigationActions from '../actions/navigation-panel.actions'
@Injectable()

export class NavigationEffects { 

    loadNavigationList$ = createEffect(() =>
    this.action$.pipe(
      ofType(ActionType.GET_NAVIGATION_LIST),
      mergeMap(() => this.storageService.getNavigationDataJSON()
        .pipe(
          take(1),
          map(navigationList => navigationActions.GetNavigationListSuccess({payload: navigationList})),
          catchError(() => of({ type: ActionType.GET_NAVIGATION_LIST_FAILURE, error: 'Error while data fetch' }))
        )
      )
    )
  );

    constructor(private action$: Actions, private storageService: StorageService){}

}