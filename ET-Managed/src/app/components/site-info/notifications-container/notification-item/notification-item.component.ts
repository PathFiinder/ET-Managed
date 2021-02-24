import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationItemPriority } from 'src/app/components/models/notification-item-priority.model';
import { NotificationActionType } from 'src/app/components/models/notification-panel-action.model';
import { NotificationItem, NotificationItemCategory, NotificationList } from '../../../models/notifications-list.model';
import * as NotificationListActions from '../../../../services/stores/actions/notifications-list.actions';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.sass']
})
export class NotificationItemComponent implements OnInit {

  @Input() item?: NotificationItem;
  private choosePriority = new Map([
    [NotificationItemCategory.IRRELEVANT, () => this.getIrrelevantPriority()],
    [NotificationItemCategory.NORMAL, () => this.getNormalPriority()],
    [NotificationItemCategory.IMPORTANT, () => this.getImportantPriority()],
    [NotificationItemCategory.VERY_IMPORTANT, () => this.getVeryImportantPriority()]
  ])

  constructor( private store: Store<{notificationList: NotificationList}>) { }

  ngOnInit(): void {
  }

  public changeNotificationItemToActive(notificationItemId: number, notificationItemIsActive: boolean, event: Event): void {
    if(notificationItemIsActive) {
    this.store.dispatch(NotificationListActions.UpdateNotificationItemIsActive({payload: notificationItemId}))
    }
    event.stopPropagation();
  }

  public onExpandOrDropButtonClick(notificationItemId: number, notificationItemIsActive: boolean, event: Event): void {
    this.store.dispatch(NotificationListActions.UpdateNotificationItem({payload: notificationItemId}));
    if(notificationItemIsActive) {
      this.store.dispatch(NotificationListActions.UpdateNotificationItemIsActive({payload: notificationItemId}))
    }
    event.stopPropagation();
  }

  public onExpandIconChange(isExpanded: boolean): string {
    return isExpanded ? 'list-content__expandIcon--isExpanded' : 'list-content__expandIcon--noExpanded'
  }

  public onBinIconButtonChange(notificationItemId: number, notificationItemIsActive: boolean, event: Event): void {
    this.store.dispatch(NotificationListActions.DeleteNotification({payload: notificationItemId}));
    if(notificationItemIsActive) {
    this.store.dispatch(NotificationListActions.UpdateNotificationIsNew())
    }
    event.stopPropagation();
  }

  public definePriorityOfNotification(itemCategory: NotificationItemCategory): NotificationItemPriority {
    return this.choosePriority.get(itemCategory)()
  }

  private getIrrelevantPriority(): NotificationItemPriority {
    return NotificationItemPriority.PRIORITY_IRRELEVANT
  }

  private getNormalPriority(): NotificationItemPriority {
    return NotificationItemPriority.PRIORITY_NORMAL
  }

  private getImportantPriority(): NotificationItemPriority {
    return NotificationItemPriority.PRIORITY_IMPORTANT
  }

  private getVeryImportantPriority(): NotificationItemPriority {
    return NotificationItemPriority.PRIORITY_VERY_IMPORTANT
  }

}
