import { Component } from '@angular/core';
import { SidemenuComponent } from '../Shared/sidemenu/sidemenu.component';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterModule } from '@angular/router';
import { HeaderComponent } from '../Shared/header/header.component';
import { LoadingComponent } from '../Shared/loading/loading.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidemenuComponent, RouterModule,HeaderComponent, LoadingComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class DashboardComponent {

  isLoading = false;

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
}
