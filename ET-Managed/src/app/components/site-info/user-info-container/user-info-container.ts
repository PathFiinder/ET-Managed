import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { SingleUser } from "../../models/userInfo.model";
import * as userInfoListActions from '../../../services/stores/actions/userInfo.actions';
@Component({
    selector: 'app-user-info-container',
    templateUrl: './user-info-container.html',
    styleUrls: ['./user-info-container.sass']
  })
  export class UserInfoContainer implements OnInit {

    public isSessionInformationActive: boolean = false;
    public isUserInfoActive: boolean = false;


    
    userInfo: Observable<SingleUser> = this.store.select(state => state.userInfo)

    constructor(private store: Store<{userInfo: SingleUser}>){}

    ngOnInit(): void {
      this.isUserInfoActive = true;
      this.store.dispatch(userInfoListActions.GetUserInfoList())
    }

    public onSessionInfoClick(): void {
        this.isSessionInformationActive = true;
        this.isUserInfoActive = false
    }
      
  }