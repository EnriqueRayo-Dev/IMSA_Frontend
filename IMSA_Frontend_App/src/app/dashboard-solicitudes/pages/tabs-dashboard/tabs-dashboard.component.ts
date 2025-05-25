import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { TabInfoGeneralComponent } from '../tab-info-general/tab-info-general.component';
import { Solicitud } from '../../../solicitudes-de-compra/interfaces/solicitud';
import { TabDocumentosComponent } from '../tab-documentos/tab-documentos.component';
@Component({
  selector: 'app-tabs-dashboard',
  standalone: true,
  imports: [MatTabsModule , CommonModule,TabInfoGeneralComponent,TabDocumentosComponent
  ],
  templateUrl: './tabs-dashboard.component.html',
  styleUrl: './tabs-dashboard.component.scss'
})
export class TabsDashboardComponent {


   constructor(
    public dialogRef: MatDialogRef<TabsDashboardComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Solicitud
    ) {
      console.log('Solicitud recibida:', data);
    }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
