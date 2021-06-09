import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import {deleteAllNotifications, hidePopupsOnNotificationList, updateNotificationIsNew} from 'src/app/services/stores/actions/system-data.actions'
import { NotificationItem } from 'src/app/services/stores/types/systemData.model';
@Component({
  selector: 'app-notifications-container',
  templateUrl: './notifications-container.component.html',
  styleUrls: ['./notifications-container.component.sass']
})
export class NotificationsContainerComponent implements OnInit, OnDestroy {

  @Input() notificationList?: NotificationItem[];
  public numberOfActiveNotifications: number = 0;
  public isEmptyNotificationContainer: boolean = true;

  constructor(private store: Store) {}

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  public onHidePopupsButtonClick(): void {
    this.store.dispatch(hidePopupsOnNotificationList())
  }

  public onClearButtonClick(): void {
    this.store.dispatch(deleteAllNotifications());
    this.store.dispatch(updateNotificationIsNew());
  }




}
