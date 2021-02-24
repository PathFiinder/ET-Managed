import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-user-info-container',
    templateUrl: './user-info-container.html',
    styleUrls: ['./user-info-container.sass']
  })
  export class UserInfoContainer implements OnInit {

    public isSessionInformationActive: boolean = false;
    public isUserInfoActive: boolean = false;

    constructor(){}

    ngOnInit(): void {
      this.isUserInfoActive = true;
      console.log(this.isUserInfoActive)
    }

    public onSessionInfoClick(): void {
        this.isSessionInformationActive = true;
        this.isUserInfoActive = false
    }
      
  }