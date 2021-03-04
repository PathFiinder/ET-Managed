import { Component, Input, OnInit } from "@angular/core";
import { SingleUser } from "src/app/components/models/userInfo.model";

@Component({
    selector: 'app-user-information-item',
    templateUrl: './user-information-item.component.html',
    styleUrls: ['./user-information-item.component.sass']
  })
  export class UserInformationItemComponent implements OnInit {

    @Input() userInfo?: SingleUser;
    constructor(){}

    ngOnInit(): void {
        // console.log(this.userInfo)
    }
  }