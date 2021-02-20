import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationItem, NotificationItemCategory, NotificationList } from '../../models/notifications-list.model';
import * as NotificationListActions from '../../../services/stores/actions/notifications-list.actions';
import { Observable } from 'rxjs';
import {NotificationActionType} from '../../models/notification-panel-action.model'
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-notifications-container',
  templateUrl: './notifications-container.component.html',
  styleUrls: ['./notifications-container.component.sass']
})
export class NotificationsContainerComponent implements OnInit {

  public numberOfActiveNotifications: number = 0;
  public isEmptyNotificationContainer: boolean = true;
  notificationsList: Observable<NotificationList> = 
    this.store.select(state => state.notificationList)
    .pipe(tap(list => this.numberOfActiveNotifications = list.notificationList.length));



  constructor(
    private store: Store<{notificationList: NotificationList}>
  ) {
   
  }

  ngOnInit(): void {
    this.store.dispatch({type: NotificationActionType.GET_NOTIFICATIONS_LIST})
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
