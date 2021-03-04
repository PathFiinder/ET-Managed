import { Component, Input, OnInit } from "@angular/core";
import { SingleUser} from "src/app/components/models/userInfo.model";
import { SiteInfoComponent } from "../../site-info.component";



@Component({
    selector: 'app-user-information',
    templateUrl: './user-information.component.html',
    styleUrls: ['./user-information.component.sass']
  })
  export class UserInformationComponent implements OnInit {

    public isUserInfoActive: boolean = false;

    @Input() userInfoData?: SingleUser
    Object = Object;
    constructor(private siteInfo: SiteInfoComponent){}

    ngOnInit(): void {
      this.isUserInfoActive = true;
      console.log(this.userInfoData)
    }

    closeUserInfoButton(): void {
      this.isUserInfoActive = false;
      this.siteInfo.setUserButtonToInactive();
    }
  }