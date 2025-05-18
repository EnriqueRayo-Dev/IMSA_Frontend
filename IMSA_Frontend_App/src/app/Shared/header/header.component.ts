import { Component, EventEmitter, Output } from '@angular/core';
import { ToggleMenuService } from '../services/toggle-menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private toggleService: ToggleMenuService){}

  onHamburgerClick(){
    this.toggleService.triggerToggleMenu();
  }

  //  onToggle() {
  //   this.toggleService.toggleButton();
  // }
}
