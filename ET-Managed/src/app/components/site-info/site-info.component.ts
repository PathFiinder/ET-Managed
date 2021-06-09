import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsNewNotification, selectNotificationList } from 'src/app/services/stores/selectors/system-data.selector';
import { NotificationItem } from 'src/app/services/stores/types/systemData.model';

@Component({
  selector: 'app-site-info',
  templateUrl: './site-info.component.html',
  styleUrls: ['./site-info.component.sass']
})
export class SiteInfoComponent implements OnInit {

  public isNotificationButtonActive: boolean = false;
  public isNotificationContainerEmpty: boolean = true;

  public isUserInfoButtonActive: boolean = false;
  public isSystemInfoButtonActive: boolean = false;

  @ViewChild('notificationButton') notificationButton: ElementRef;
  @ViewChild('notificationPanel') notificationPanel: ElementRef;
  
  @ViewChild('userInfoButton') userInfoButton: ElementRef;
  @ViewChild('userInfoPanel') userInfoPanel: ElementRef;

  @ViewChild('systemInfoButton') systemInfoButton: ElementRef;
  @ViewChild('systemInfoPanel') systemInfoPanel: ElementRef;

  notificationsList: Observable<NotificationItem[]> = this.store.select(selectNotificationList)
  isNewNotification: Observable<boolean> = this.store.select(selectIsNewNotification)
  constructor(private renderer: Renderer2, private store: Store
    ) 
    { 
    this.renderer.listen('window', 'click',(e:Event)=>{
    this.checkNotificationButtonStatus(e);
    this.checkUserInfoButtonStatus(e);
    this.checkSystemInfoButtonStatus(e);
    })
  }

  ngOnInit(): void {
  }

  public onNotificationButtonClick(): void {
    this.isNotificationButtonActive = !this.isNotificationButtonActive;
  }

  public onUserInfoButtonClick(): void {
    this.isUserInfoButtonActive = !this.isUserInfoButtonActive;
  }

  public onSystemInfoButtonClick(): void {
    this.isSystemInfoButtonActive = !this.isSystemInfoButtonActive;
  }

  public setUserButtonToInactive(): void {
    this.isUserInfoButtonActive = false;
  } 

  public setSystemuttonToInactive(): void {
    this.isSystemInfoButtonActive = false;
  } 

  private setNotificationButtonActiveToFalse() {
    this.isNotificationButtonActive = false;
  }

  private checkIfNotificationButtonOrPanelIsActive(e: Event) {
    if (!this.notificationButton.nativeElement.contains(e.target) && !this.notificationPanel.nativeElement.contains(e.target)) {
      this.setNotificationButtonActiveToFalse();
    }
  }

  private checkIfNotificationButtonIsActive(e: Event) {
    if (!this.notificationButton.nativeElement.contains(e.target)) {
      this.setNotificationButtonActiveToFalse();
    }
  }

  private checkNotificationButtonStatus(e: Event) {
    if (this.isNotificationButtonActive) {
      this.checkIfNotificationButtonOrPanelIsActive(e);
    } 
    else {
      this.checkIfNotificationButtonIsActive(e);
    }
  }


  private setUserInfoButtonActiveToFalse() {
    this.isUserInfoButtonActive = false;
  }

  private checkIfUserInfoButtonOrPanelIsActive(e: Event) {
    if (!this.userInfoButton.nativeElement.contains(e.target) && !this.userInfoPanel.nativeElement.contains(e.target)) {
      this.setUserInfoButtonActiveToFalse();
    }
  }

  private checkIfUserInfoButtonIsActive(e: Event) {
    if (!this.userInfoButton.nativeElement.contains(e.target)) {
      this.setUserInfoButtonActiveToFalse();
    }
  }

  private checkUserInfoButtonStatus(e: Event) {
    if (this.isUserInfoButtonActive) {
      this.checkIfUserInfoButtonOrPanelIsActive(e);
    } 
    else {
      this.checkIfUserInfoButtonIsActive(e);
    }
  }

  private checkSystemInfoButtonStatus(e: Event) {
    if (this.isSystemInfoButtonActive) {
      this.checkIfSystemnInfoButtonOrPanelIsActive(e);
    } 
    else {
      this.checkIfSystemInfoButtonIsActive(e);
    }
  }

  private checkIfSystemnInfoButtonOrPanelIsActive(e: Event) {
    if (!this.systemInfoButton.nativeElement.contains(e.target) && !this.systemInfoPanel.nativeElement.contains(e.target)) {
      this.setSystemInfoButtonActiveToFalse();
    }
  }

  private setSystemInfoButtonActiveToFalse() {
    this.isSystemInfoButtonActive = false;
  }

  private checkIfSystemInfoButtonIsActive(e: Event) {
    if (!this.systemInfoButton.nativeElement.contains(e.target)) {
      this.setSystemInfoButtonActiveToFalse();
    }
  }



}
