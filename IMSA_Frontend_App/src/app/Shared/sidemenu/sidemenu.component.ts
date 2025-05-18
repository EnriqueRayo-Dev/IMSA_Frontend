import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';
import { ToggleMenuService } from '../services/toggle-menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.scss'
})
export class SidemenuComponent implements OnInit{
//@Output() botonHamburguesaEmitter: EventEmitter<boolean> = new EventEmitter();

 public mostrarMenu : boolean = true;
 public esPantallaPequena: boolean = false;
 private subscription!: Subscription;


  @ViewChild('menuRef') menuRef!: ElementRef;
  constructor(public router: Router,private toggleService: ToggleMenuService,private cdr: ChangeDetectorRef){
  }
  
  ngOnInit(): void {
    this.toggleService.toggleMenu$.subscribe(()=>{
      this.mostrarMenu = !this.mostrarMenu;
    })
  }

  public meniUtems = routes
  .map((route) => route.children ?? [])
  .flat()
  .filter((route)=> route && route.path)

  public navigate(url: any){
    if(url && url.path)
      this.router.navigate([url.path]);
  }

  @HostListener('window:resize', ['$event'])
onResize(event: Event) {
  this.esPantallaPequena = window.innerWidth <= 900;
  this.cambiarEstilosPantallaPequeña(this.esPantallaPequena)

}


cambiarEstilosPantallaPequeña(esPantallaPequeña: boolean){
    if(esPantallaPequeña){
      this.mostrarMenu = false
      this.toggleService.setBotonHamburguesa(true);
    }else{
      this.mostrarMenu = true;
      this.toggleService.setBotonHamburguesa(false);
    }
    
}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
   

}
