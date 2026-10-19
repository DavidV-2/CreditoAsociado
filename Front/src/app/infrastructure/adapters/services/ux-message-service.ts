import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UxMessageService {
  open(message: string, kind: 'success' | 'error' | 'validation' | 'info' = 'info'): void {

    console[kind === 'error' ? 'error' : 'log'](`[${kind}] ${message}`);
  }
}