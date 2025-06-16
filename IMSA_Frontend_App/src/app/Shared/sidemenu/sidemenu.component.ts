import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
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
export class SidemenuComponent implements OnInit {
  //@Output() botonHamburguesaEmitter: EventEmitter<boolean> = new EventEmitter();

  public mostrarMenu: boolean = true;
  public esPantallaPequena: boolean = false;
  @Input() isMobile: boolean = false;
  @Output() mostrarMenuEmitter: EventEmitter<boolean> = new EventEmitter<boolean>(false);
  @Output() closeMenu = new EventEmitter<void>();
  @ViewChild('menuRef') menuRef!: ElementRef;
  constructor(public router: Router, private toggleService: ToggleMenuService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
   this.toggleService.menuVisible$.subscribe(state=>{
    this.mostrarMenu = state;
   })
    this.onResize();
  }


  public meniUtems = routes
    .map((route) => route.children ?? [])
    .flat()
    .filter((route) => route && route.path && route.data?.['icon'])

  public navigate(url: any) {
    if (url && url.path)
      this.router.navigate([url.path]).then(()=>{
        this.mostrarMenu = false;
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.evaluarTamañoPantalla();
  }


  cambiarEstilosPantallaPequeña(esPantallaPequeña: boolean) {
    if (esPantallaPequeña) {
      this.mostrarMenu = false
     
    } else {
      this.mostrarMenu = true;
      
    }

  }


  public evaluarTamañoPantalla() {
    this.esPantallaPequena = window.innerWidth <= 1000;
    this.cambiarEstilosPantallaPequeña(this.esPantallaPequena)
  }

  onMenuItemClick() {
  if (this.isMobile) {
    this.closeMenu.emit(); // Notificamos para cerrar el menú
  }

}
}
