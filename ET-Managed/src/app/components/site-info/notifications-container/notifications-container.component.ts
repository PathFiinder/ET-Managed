import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationItem, NotificationItemCategory, NotificationList } from '../../models/notifications-list.model';
import * as NotificationListActions from '../../../services/stores/actions/notifications-list.actions';
import { Observable } from 'rxjs';
import { SiteInfoComponent } from '../site-info.component';
@Component({
  selector: 'app-notifications-container',
  templateUrl: './notifications-container.component.html',
  styleUrls: ['./notifications-container.component.sass']
})
export class NotificationsContainerComponent implements OnInit, OnDestroy {

  @Input() notificationList?: NotificationItem[];
  public numberOfActiveNotifications: number = 0;
  public isEmptyNotificationContainer: boolean = true;

  constructor(
    private store: Store<{notificationList: NotificationList}>
  ) {}

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

  public onHidePopupsButtonClick(): void {
    this.store.dispatch(NotificationListActions.HidePopupsOnNotificationList());
  }

  public onClearButtonClick(): void {
    this.store.dispatch(NotificationListActions.DeleteAllNotifications());
    this.store.dispatch(NotificationListActions.UpdateNotificationIsNew());
  }




}
