import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.scss'
})
export class SidemenuComponent {

  constructor(public router: Router){
    
  }

  public meniUtems = routes
  .map((route) => route.children ?? [])
  .flat()
  .filter((route)=> route && route.path)

  public navigate(url: any){
    if(url && url.path)
      this.router.navigate([url.path]);
  }

}
