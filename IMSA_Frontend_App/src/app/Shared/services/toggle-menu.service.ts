import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleMenuService {
private menuVisible = new BehaviorSubject<boolean>(true); 

  menuVisible$ = this.menuVisible.asObservable();

  triggerToggleMenu() {
    this.menuVisible.next(!this.menuVisible.value); 
  }

  getBotonHamburguesa(): boolean {
    return this.menuVisible.value;
  }

  setMenuVisible(state: boolean) {
    this.menuVisible.next(state);
  }
}
