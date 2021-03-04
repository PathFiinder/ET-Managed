import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { SingleUser } from "src/app/components/models/userInfo.model";
import { SiteInfoComponent } from "../../site-info.component";
import * as userInfoListActions from '../../../../services/stores/actions/userInfo.actions';



@Component({
    selector: 'app-user-information',
    templateUrl: './user-information.component.html',
    styleUrls: ['./user-information.component.sass']
  })
  export class UserInformationComponent implements OnInit {

    public isUserInfoActive: boolean = false;

    userInfo: Observable<SingleUser> = this.store.select(state => state.userInfo)

    constructor(private siteInfo: SiteInfoComponent, private store: Store<{userInfo: SingleUser}>){}

    ngOnInit(): void {
      this.isUserInfoActive = true;
      this.store.dispatch(userInfoListActions.GetUserInfoList())
    }

    closeUserInfoButton(): void {
      this.isUserInfoActive = false;
      
      this.siteInfo.setUserButtonToInactive();
    }
  }