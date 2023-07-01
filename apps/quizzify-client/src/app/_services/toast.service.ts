import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  DEFAULT_DELAY = 4000
  private messageSubject: Subject<string | null> = new Subject<string | null>();
  private statusSubject: Subject<'success' | 'error' | null> = new Subject<'success' | 'error' | null>();

  alertToast(message: string, status: 'success' | 'error' | null): void {
    this.messageSubject.next(message);
    this.statusSubject.next(status);
  }

  clearToast(delay?: number): void {
    setTimeout(() => {
      this.messageSubject.next(null);
      this.statusSubject.next(null);
    }, delay ?? this.DEFAULT_DELAY)
  }

  getMessage(): Subject<string | null> {
    return this.messageSubject
  }

  getStatus(): Subject<'success' | 'error' | null> {
    return this.statusSubject
  }

}
