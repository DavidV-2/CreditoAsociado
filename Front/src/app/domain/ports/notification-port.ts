import { InjectionToken } from "@angular/core"

export type NotificationKind = 'success' | 'error' | 'validation' | 'info';

export interface UxNotification {
  kind: NotificationKind;
  title?: string;
  message: string;
  durationMs?: number;
}

export interface NotificationPort {
  sendNotification(notification: UxNotification): void;
}
export const NOTIFICATION_PORT = new InjectionToken<NotificationPort>( 'NOTIFICATION_PORT' );