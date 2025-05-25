import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButton } from '@angular/material/button';
import { RegistroSolicitudComponent } from '../../../solicitudes-de-compra/pages/registro-solicitud/registro-solicitud.component';
import { TabInfoGeneralComponent } from '../tab-info-general/tab-info-general.component';
@Component({
  selector: 'app-tabs-dashboard',
  standalone: true,
  imports: [MatTabsModule , CommonModule, MatButton,RegistroSolicitudComponent,TabInfoGeneralComponent
  ],
  templateUrl: './tabs-dashboard.component.html',
  styleUrl: './tabs-dashboard.component.scss'
})
export class TabsDashboardComponent {


   constructor(
    public dialogRef: MatDialogRef<TabsDashboardComponent>,
    ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
