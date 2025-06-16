import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToggleMenuService } from '../services/toggle-menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public isMobile: boolean = false;
  private toggle = false;

  @Output() hamburclickEmitter = new EventEmitter<boolean>();
  constructor(private toggleService: ToggleMenuService) { }

  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 1000; 
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 1000;
    });
  }


  onHamburgerClick() {

     this.hamburclickEmitter.emit(this.isMobile)
  }




}
