import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastService } from '../../_services/toast.service';
@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  messageSubject: Subject<string | null> = new Subject<string | null>();
  statusSubject: Subject<'success' | 'error' | null> = new Subject<'success' | 'error' | null>();

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
    this.toastService.getMessage().subscribe((message) => {
      this.messageSubject.next(message)
    })

    this.toastService.getStatus().subscribe((status) => {
      this.statusSubject.next(status)
    })
  }

  clearToast(): void {
    this.toastService.clearToast(0)
  }

}
