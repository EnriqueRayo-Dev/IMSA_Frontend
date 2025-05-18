import { Component } from '@angular/core';
import { SidemenuComponent } from '../Shared/sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../Shared/header/header.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidemenuComponent, RouterModule,HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class DashboardComponent {

}
