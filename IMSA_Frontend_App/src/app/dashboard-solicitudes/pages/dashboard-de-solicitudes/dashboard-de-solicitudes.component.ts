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
import { MatCheckboxModule } from '@angular/material/checkbox';

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
    MatDialogModule,
    MatCheckboxModule

  ],

  templateUrl: './dashboard-de-solicitudes.component.html',
  styleUrl: './dashboard-de-solicitudes.component.scss'
})
export class DashboardDeSolicitudesComponent implements OnInit {
  public displayedColumns: string[] = ['Folio', 'Numero Solicitud', 'Fecha Solicitud', 'Nombre Solicitante', 'Encargado Adquisicion', 'Asignado a'];
  public dataSource = new MatTableDataSource<Solicitud>();
  public selectedRow: any;
  public isChecked: boolean = false;
  public isMobile: boolean = false;
  constructor(private fb: FormBuilder, private cd: ChangeDetectorRef,
    public dialog: MatDialog
  ) {

  }
  ngOnInit(): void {

    this.isMobile = window.innerWidth <= 768;
    window.addEventListener('resize', () => {
      this.isMobile = window.innerWidth <= 768;
    });

    const solicitudesStr = localStorage.getItem('solicitud');
    const solicitudes: Solicitud[] = JSON.parse(solicitudesStr ?? "");
    this.dataSource.data = solicitudes;
  }

  clickedRows = new Set<PeriodicElement>();
  onRowClicked(row: PeriodicElement) {
    if (this.selectedRow === row) {
      this.selectedRow = null;
    } else {
      this.selectedRow = row;
    }
  }

  onRowDoubleClicked(row: Solicitud) {
    this.enviarDatosDialogo(row);
  }

  aplicarFiltro(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onCheckChange(checked: boolean) {
    this.isChecked = checked;
  }

  verSolicitud() {
    if (!this.selectedRow) {
      alert('debe seleccionar un registro algo')
    } else {
      this.enviarDatosDialogo(this.selectedRow);
    }
  }

  finalizarSolicitud() {
    if (!this.selectedRow) {
      alert('debe seleccionar un registro algo')
    } else {
      alert('Eliminada')
    }
  }

  enviarDatosDialogo(row: Solicitud) {
    const dialogRef = this.dialog.open(TabsDashboardComponent, {
      width: '95vw',
      height: '80vw',       // 70% del viewport height (opcional)
      maxWidth: 'none',     // elimina el max-width por defecto
      maxHeight: '90vh',
      panelClass: 'custom-dialog-container', // para estilos 
      data: row
    });
  }


}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

