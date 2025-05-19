import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-dashboard-de-solicitudes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-de-solicitudes.component.html',
  styleUrl: './dashboard-de-solicitudes.component.scss'
})
export class DashboardDeSolicitudesComponent {
declare  flowbite: any; // declarar flowbite global para TypeScript

ngAfterViewInit() {
  const tabTriggerElements = document.querySelectorAll('[data-tabs-toggle]');
  tabTriggerElements.forEach((el) => {
    this.flowbite.Tab.getOrCreateInstance(el);
  });
}

}
