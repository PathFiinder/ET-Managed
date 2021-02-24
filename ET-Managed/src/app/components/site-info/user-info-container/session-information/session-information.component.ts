import { Component, OnInit } from "@angular/core";
import { SiteInfoComponent } from "../../site-info.component";



@Component({
    selector: 'app-session-information',
    templateUrl: './session-information.component.html',
    styleUrls: ['./session-information.component.sass']
  })
  export class SessionInformationComponent implements OnInit {

    public isSessionInfoActive: boolean = false;

    constructor(private siteInfo: SiteInfoComponent){}

    ngOnInit(): void {
      this.isSessionInfoActive = true;
    }

    closeSessionInfoButton(): void {
      this.isSessionInfoActive = false;
      
      this.siteInfo.setUserButtonToInactive();
    }
  }