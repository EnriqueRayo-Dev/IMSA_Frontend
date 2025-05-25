import { ChangeDetectorRef, Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule, FormArray, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { timeout } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { TabsDashboardComponent } from '../tabs-dashboard/tabs-dashboard.component';


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
    RouterOutlet,MatButtonModule,MatDialogModule
    
  ],

  templateUrl: './dashboard-de-solicitudes.component.html',
  styleUrl: './dashboard-de-solicitudes.component.scss'
})
export class DashboardDeSolicitudesComponent {


  constructor(private fb: FormBuilder,private cd: ChangeDetectorRef,
    public dialog: MatDialog
  ) {

  }

 ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

 displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();
  onRowClicked(row: PeriodicElement) {
  console.log('Fila clickeada:', row);
}

onRowDoubleClicked(row: PeriodicElement) {
    const dialogRef = this.dialog.open(TabsDashboardComponent, {
  width: '95vw',     
  height: '80vw',       // 70% del viewport height (opcional)
  maxWidth: 'none',     // elimina el max-width por defecto
  maxHeight: '90vh',
  panelClass: 'custom-dialog-container' // para estilos extra si quieres
});
}


}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

