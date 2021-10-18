import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationItemPriority } from 'src/app/components/models/notification-item-priority.model';
import { deleteNotificationItemById, updateNotificationIsNew, updateNotificationItemIsActiveById, updateNotificationItemIsExpandedById } from 'src/app/services/stores/actions/system-data.actions';
import { NotificationItem, CategoryAndPriority } from 'src/app/services/stores/types/systemData.model';


@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.sass']
})
export class NotificationItemComponent implements OnInit {

  @Input() item?: NotificationItem;
  private choosePriority = new Map([
    [CategoryAndPriority.IRRELEVANT, () => this.getIrrelevantPriority()],
    [CategoryAndPriority.NORMAL, () => this.getNormalPriority()],
    [CategoryAndPriority.IMPORTANT, () => this.getImportantPriority()],
    [CategoryAndPriority.VERY_IMPORTANT, () => this.getVeryImportantPriority()]
  ]);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  public changeNotificationItemToActive(notificationItemId: number, notificationItemIsActive: boolean, event: Event): void {
    if (notificationItemIsActive) {
      this.store.dispatch(updateNotificationItemIsActiveById({notificationItemId}));
    }
    event.stopPropagation();
  }

  public onExpandOrDropButtonClick(notificationItemId: number, notificationItemIsActive: boolean, event: Event): void {
    this.store.dispatch(updateNotificationItemIsExpandedById({notificationItemId}));
    if (notificationItemIsActive) {
      this.store.dispatch(updateNotificationItemIsActiveById({notificationItemId}));
    }
    event.stopPropagation();
  }

  public onExpandIconChange(isExpanded: boolean): string {
    return isExpanded ? 'list-content__expandIcon--isExpanded' : 'list-content__expandIcon--noExpanded';
  }

  public onBinIconButtonChange(notificationItemId: number, notificationItemIsActive: boolean, event: Event): void {
    this.store.dispatch(deleteNotificationItemById({notificationItemId}));
    if (notificationItemIsActive) {
      this.store.dispatch(updateNotificationIsNew());
    }
    event.stopPropagation();
  }

  public definePriorityOfNotification(itemCategory: CategoryAndPriority): NotificationItemPriority {
    return this.choosePriority.get(itemCategory)();
  }

  private getIrrelevantPriority(): NotificationItemPriority {
    return NotificationItemPriority.PRIORITY_IRRELEVANT;
  }

  private getNormalPriority(): NotificationItemPriority {
    return NotificationItemPriority.PRIORITY_NORMAL;
  }

  private getImportantPriority(): NotificationItemPriority {
    return NotificationItemPriority.PRIORITY_IMPORTANT;
  }

  private getVeryImportantPriority(): NotificationItemPriority {
    return NotificationItemPriority.PRIORITY_VERY_IMPORTANT;
  }

}
