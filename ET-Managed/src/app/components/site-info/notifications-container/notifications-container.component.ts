import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationItem, NotificationItemCategory, NotificationList } from '../../models/notifications-list.model';
import * as NotificationListActions from '../../../services/stores/actions/notifications-list.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-notifications-container',
  templateUrl: './notifications-container.component.html',
  styleUrls: ['./notifications-container.component.sass']
})
export class NotificationsContainerComponent implements OnInit, OnDestroy {

  public numberOfActiveNotifications: number = 0;
  public isEmptyNotificationContainer: boolean = true;
  notificationsList: Observable<NotificationList> = 
    this.store.select(state => state.notificationList)

  constructor(
    private store: Store<{notificationList: NotificationList}>
  ) {}

  ngOnDestroy(): void {
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
      this.isEmptyNotificationContainer = false;
    }
  }



}
