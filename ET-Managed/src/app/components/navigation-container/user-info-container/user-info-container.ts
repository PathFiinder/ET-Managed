import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { selectCurrentUser } from '../../../services/stores/selectors/system-data.selector';
import { LoggedUser } from "src/app/services/stores/types/systemData.model";
@Component({
    selector: 'app-user-info-container',
    templateUrl: './user-info-container.html',
    styleUrls: ['./user-info-container.sass']
  })
  export class UserInfoContainer implements OnInit {

    public isSessionInformationActive: boolean = false;
    public isUserInfoActive: boolean = false;

    userInfo: Observable<LoggedUser> = this.store.select(selectCurrentUser)
    constructor(private store: Store){}

    ngOnInit(): void {
      this.isUserInfoActive = true;
    }

    public onSessionInfoClick(): void {
        this.isSessionInformationActive = true;
        this.isUserInfoActive = false
    }
      
  }