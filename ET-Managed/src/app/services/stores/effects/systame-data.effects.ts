import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, mergeMap} from "rxjs/operators";
import { StorageService } from "../../storage/storage.service";
import { getSystemDataSuccess } from "../actions/system-data.actions";
import { SystemDataActionType } from "../models/system-data-actions.model";
@Injectable()

export class SystemDataEffects { 

    loadSystemData$ = createEffect(() =>
    this.action$.pipe(
      ofType(SystemDataActionType.GET_SYSTEM_DATA),
      mergeMap(() => this.storageService.getSystemDataJSON()
        .pipe(
          map(systemData => getSystemDataSuccess({payload: systemData})),
          catchError(() => of({ type: SystemDataActionType.GET_SYSTEM_DATA_FAILURE, error: 'Error while system data fetch' }))
        )
      )
    )
    );
    constructor(private action$: Actions, private storageService: StorageService, private store: Store){}

}