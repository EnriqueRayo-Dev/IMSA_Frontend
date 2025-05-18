import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleMenuService {

  constructor() { }

   private toggleMenuSubject = new Subject<void>();
   //private toggleButtonSubject = new Subject<void>();
   toggleMenu$ = this.toggleMenuSubject.asObservable();
   buttonH$ = this.toggleMenuSubject.asObservable();

  triggerToggleMenu() {
    this.toggleMenuSubject.next();
  }
  //  toggleButton() {
  //   this.toggleButtonSubject.next();
  // }
}
