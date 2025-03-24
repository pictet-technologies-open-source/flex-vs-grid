import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
    id: number;
    message: string;
    title: string;
}

@Injectable({ providedIn: 'root' })
export class NotificationService {
    private notificationsSubject = new BehaviorSubject<Notification[]>([]);
    notifications$ = this.notificationsSubject.asObservable();
    private nextId = 1;

    addNotification(title: string, message: string) {
        const newNotification: Notification = { id: this.nextId++, title, message };
        this.notificationsSubject.next([...this.notificationsSubject.value, newNotification]);

        setTimeout(() => this.removeNotification(newNotification.id), 10000); // 10s
    }

    removeNotification(id: number) {
        const updatedNotifications = this.notificationsSubject.value.filter(n => n.id !== id);
        this.notificationsSubject.next(updatedNotifications);
    }
}
