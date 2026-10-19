import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { ROUTES_PAGES } from './ui/pages/routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NOTIFICATION_PORT } from './domain/ports/notification-port';
import { UxNotificationAdapter } from './infrastructure/adapters/ux-notification.adapter';
import { authInterceptor } from './infrastructure/adapters/auth-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    {provide: NOTIFICATION_PORT, useExisting: UxNotificationAdapter},
    provideBrowserGlobalErrorListeners(),
    provideRouter(ROUTES_PAGES),
    provideClientHydration(),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};
