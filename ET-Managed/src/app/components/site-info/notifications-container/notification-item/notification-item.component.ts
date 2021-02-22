import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationItemPriority } from 'src/app/components/models/notification-item-priority.model';
import { NotificationActionType } from 'src/app/components/models/notification-panel-action.model';
import { NotificationItem, NotificationItemCategory, NotificationList } from '../../../models/notifications-list.model';

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

  public onExpandOrDropButtonClick(notificationItemId: number): void {
    this.store.dispatch({type: NotificationActionType.UPDATE_NOTIFICATION_ITEM, payload: notificationItemId});
  }

  public definePrirotyOfNotification(itemCategory: NotificationItemCategory): NotificationItemPriority {
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
