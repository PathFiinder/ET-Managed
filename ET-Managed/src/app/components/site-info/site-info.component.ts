import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationList } from '../models/notifications-list.model';
import * as NotificationListActions from '../../services/stores/actions/notifications-list.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-site-info',
  templateUrl: './site-info.component.html',
  styleUrls: ['./site-info.component.sass']
})
export class SiteInfoComponent implements OnInit {

  public isNotificationButtonActive: boolean = false;
  public isNotificationContainerEmpty: boolean = true;

  public isUserInfoButtonActive: boolean = false;

  @ViewChild('notificationButton') notificationButton: ElementRef;
  @ViewChild('notificationPanel') notificationPanel: ElementRef;
  @ViewChild('userInfoButton') userInfoButton: ElementRef;
  @ViewChild('userInfoPanel') userInfoPanel: ElementRef;

  notificationsList: Observable<NotificationList> = 
  this.store.select(state => state.notificationList)

  constructor(private renderer: Renderer2, private store: Store<{notificationList: NotificationList}>) 
    { 
    this.renderer.listen('window', 'click',(e:Event)=>{
    this.checkNotificationButtonStatus(e);
    this.checkUserInfoButtonStatus(e);
    })
  }

  ngOnInit(): void {
    this.store.dispatch(NotificationListActions.GetNotificationList())
  }

  public onNotificationButtonClick(): void {
    this.isNotificationButtonActive = !this.isNotificationButtonActive;
  }

  public onUserInfoButtonClick(): void {
    this.isUserInfoButtonActive = !this.isUserInfoButtonActive;
  }


  public setUserButtonToInactive(): void {
    this.isUserInfoButtonActive = false;
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








}
