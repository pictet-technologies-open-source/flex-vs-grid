import { Component, OnInit } from '@angular/core';
import { Notification, NotificationService } from './notification.service';
import { IconBaseComponent } from '../global-layout/icon-base/icon-base.component';

@Component({
  selector: 'app-notification',
    imports: [
        IconBaseComponent
    ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.less'
})
export class NotificationComponent implements OnInit {
    notifications: Notification[] = [];

    constructor(protected notificationService: NotificationService) {}

    ngOnInit() {
        this.notificationService.notifications$.subscribe(notifications => {
            this.notifications = notifications;
        });
    }
}
