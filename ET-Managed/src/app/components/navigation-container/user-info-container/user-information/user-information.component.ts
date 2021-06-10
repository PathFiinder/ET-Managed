import { Component, Input, OnInit } from "@angular/core";
import { LoggedUser } from "src/app/services/stores/types/systemData.model";
import { NavigationContainerComponent } from "../../navigation-container.component";

@Component({
    selector: 'app-user-information',
    templateUrl: './user-information.component.html',
    styleUrls: ['./user-information.component.sass']
  })
  export class UserInformationComponent implements OnInit {

    public isUserInfoActive: boolean = false;

    @Input() userInfoData?: LoggedUser
    Object = Object;
    constructor(private siteInfo: NavigationContainerComponent){}

    ngOnInit(): void {
      this.isUserInfoActive = true;
    }

    closeUserInfoButton(): void {
      this.isUserInfoActive = false;
      this.siteInfo.setUserButtonToInactive();
    }
  }