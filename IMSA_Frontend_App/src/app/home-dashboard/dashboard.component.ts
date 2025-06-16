import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { SidemenuComponent } from '../Shared/sidemenu/sidemenu.component';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../Shared/header/header.component';
import { LoadingComponent } from '../Shared/loading/loading.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidemenuComponent, RouterModule, HeaderComponent, LoadingComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class DashboardComponent implements OnInit {

  public isLoading = false;
  public mostrarMenu: boolean = true;
  public isMobile: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {

        this.isLoading = true;
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.isLoading = false;
      }
    });
  }

  ngOnInit(): void {
    this.onResize();
    this.isMobile = window.innerWidth <= 1000;
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 1000;
    });

  }


  @HostListener('window:resize', ['$event'])
  onResize() {

    const esPequena = window.innerWidth <= 1000;
    this.mostrarMenu = !esPequena;
  }

  isClickOnHambur(isClickOnHambur: boolean) {
    this.mostrarMenu = isClickOnHambur;
  }

  mostrarMenuDespuesDeNavegar(a: boolean){
    this.mostrarMenu = a;
  }

}
