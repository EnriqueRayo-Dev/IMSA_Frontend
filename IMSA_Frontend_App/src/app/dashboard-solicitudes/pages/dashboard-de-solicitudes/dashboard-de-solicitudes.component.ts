import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule, FormArray, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { timeout } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { TabsDashboardComponent } from '../tabs-dashboard/tabs-dashboard.component';
import { Solicitud } from '../../../solicitudes-de-compra/interfaces/solicitud';


@Component({
  selector: 'app-dashboard-de-solicitudes',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule

  ],

  templateUrl: './dashboard-de-solicitudes.component.html',
  styleUrl: './dashboard-de-solicitudes.component.scss'
})
export class DashboardDeSolicitudesComponent implements OnInit {
  public displayedColumns: string[] = ['Folio','Numero Solicitud', 'Fecha Solicitud', 'Nombre Solicitante', 'Encargado Adquisicion'];
  public dataSource: Solicitud[] = [];

  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef,
    public dialog: MatDialog
  ) {

  }
  ngOnInit(): void {
    const solicitudesStr = localStorage.getItem('solicitud');
    const solicitudes: Solicitud[] = JSON.parse(solicitudesStr ?? "");
    this.dataSource = solicitudes;
  }

  clickedRows = new Set<PeriodicElement>();
  onRowClicked(row: PeriodicElement) {
    
  }

  onRowDoubleClicked(row: Solicitud) {
    const dialogRef = this.dialog.open(TabsDashboardComponent, {
      width: '95vw',
      height: '80vw',       // 70% del viewport height (opcional)
      maxWidth: 'none',     // elimina el max-width por defecto
      maxHeight: '90vh',
      panelClass: 'custom-dialog-container', // para estilos extra si quieres
      data:row
    });
  }


}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

