import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { NotificationItem, NotificationItemCategory, NotificationListItem } from '../../models/notifications-list.model';
import * as NotificationListActions from '../../../services/stores/notifications/notifications-list.actions';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-notifications-container',
  templateUrl: './notifications-container.component.html',
  styleUrls: ['./notifications-container.component.sass']
})
export class NotificationsContainerComponent implements OnInit {

  public numberOfActiveNotifications: number = 0;
  public isEmptyNotificationContainer: boolean = true;
  public notificationsList: NotificationListItem;
  private subscription: Subscription;


  constructor(
    private store: Store<{notificationList: {notificationListItem: NotificationItem[]}}>
  ) {
    this.subscription = this.store.select('notificationList').pipe(map(list => this.notificationsList = list)).subscribe()
  }

  ngOnInit(): void {
    this.checkNumberOfActiveNotifications()
  }


  public onHidePopupsButtonClick(): void {
    this.store.dispatch(NotificationListActions.AddNotificationToList(
      {payload: new NotificationItem(4, 'Notification 5','Notification 5 about something', NotificationItemCategory.NORMAL, false)}
      ));
    this.checkNumberOfActiveNotifications();
  }

  private checkNumberOfActiveNotifications(): void {
    if(this.notificationsList){
      this.numberOfActiveNotifications = this.notificationsList.notificationListItem.length
      this.isEmptyNotificationContainer = false;
    }
  }



}
