import { Component, Input, OnInit } from '@angular/core';
import { NotificationItem } from '../../../models/notifications-list.model';

@Component({
  selector: 'app-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: ['./notification-item.component.sass']
})
export class NotificationItemComponent implements OnInit {

  @Input() item?: NotificationItem;

  constructor() { }

  ngOnInit(): void {
  }

}
