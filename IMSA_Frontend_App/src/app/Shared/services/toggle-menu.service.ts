import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleMenuService {

  constructor() { }

   private toggleMenuSubject = new Subject<void>();
   public botonHamburguesa: boolean = false;
   toggleMenu$ = this.toggleMenuSubject.asObservable();

  triggerToggleMenu() {
    this.toggleMenuSubject.next();
  }
  getBotonHamburguesa(){
    return this.botonHamburguesa;
  }

  setBotonHamburguesa(botonH: boolean){
      this.botonHamburguesa = botonH;
  }

}
