import { inject, Injectable } from '@angular/core';
import {
  NotificationPort,
  UxNotification,
} from '../../domain/ports/notification-port';
import { UxMessageService } from './services/ux-message-service';

@Injectable({ providedIn: 'root' })
export class UxNotificationAdapter implements NotificationPort {
  private readonly messageUxService = inject(UxMessageService);

  sendNotification(notification: UxNotification): void {
    const text = notification.title
      ? `${notification.title}: ${notification.message}`
      : notification.message;

    this.messageUxService.open(text, notification.kind);
  }
}