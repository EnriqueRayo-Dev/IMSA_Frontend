import { ChangeDetectorRef, Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule, FormArray, AbstractControl, Validators } from '@angular/forms';
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
import { Producto } from '../../interfaces/producto';
@Component({
  selector: 'app-registro-solicitud',
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
    
  ],
  templateUrl: './registro-solicitud.component.html',
  styleUrl: './registro-solicitud.component.scss'
})
export class RegistroSolicitudComponent {

  public btnMostrarAgregar: boolean = false;
  public productosGuardados: Producto[] = [];
  tableForm: FormGroup;
  solicitudForm: FormGroup;
  isSubmitted = false;
  displayedColumns = ['item', 'descripcion', 'unidad','cantidadRequerida','precio','subtotal','acciones'];
  dataSource = new MatTableDataSource<AbstractControl>();

  
  constructor(private fb: FormBuilder,private cd: ChangeDetectorRef) {

     this.solicitudForm = this.fb.group({
     fechaSolicitud: ['', Validators.required],
     numeroScSolicitud: ['', Validators.required],
     nombreSolicitante: ['', Validators.required],
     numeroFolio: ['', Validators.required],
     fechaReciboUCC: ['', Validators.required],
     encargadoAdquisicion: ['', Validators.required],
     email: ['', Validators.required],
     telefono: ['', Validators.required]
    });

    this.tableForm = this.fb.group({
      rows: this.fb.array([]),
    });
    this.dataSource = new MatTableDataSource(this.rows.controls);
    this.addRow(); // Agrega una fila inicial
  }

  get rows(): FormArray {
    return this.tableForm.get('rows') as FormArray;
  }

  addRow() {
    this.isSubmitted = false;
    const row = this.fb.group({
       descripcion: ['',Validators.required],
       unidad: ['',Validators.required],
       precio: [''],
       cantidadRequerida: ['',Validators.required],
       subTotal:['']
    });
    
    this.rows.push(row);
    this.dataSource.data = this.rows.controls; 
    this.btnMostrarAgregar = false;
  }

  removeRow(index: number) {
    this.rows.removeAt(index);
    this.dataSource.data = this.rows.controls; 
    let tablaVacia =this.esTablaVacia();
    if(tablaVacia){
       this.btnMostrarAgregar = true;
       this.isSubmitted = true;
    }
}

  submitTableForm() {
   let tablaVacia = this.esTablaVacia();
   if(tablaVacia){
    console.log('tabla vacia')
    return
   }
    this.isSubmitted = true;
    this.productosGuardados = this.rows.value;
    this.btnMostrarAgregar = true;
  }

  Submit(){
    let tablaVacia = this.esTablaVacia();
    if(tablaVacia || this.solicitudForm.invalid ){
     this.solicitudForm.markAllAsTouched();
    this.tableForm.markAllAsTouched();
    console.log('uno de los form no esta completo')
    return;
    }
    console.log('formularios validos')
    this.limpiarFormularios();
  }

  public esTablaVacia(): boolean {
    if(this.dataSource.data.length == 0 || this.tableForm.invalid)
      return true;
    else
    return false;
  }


  limpiarFormularios(): void {
  // Limpia todos los valores del formulario principal
  this.solicitudForm.reset();

  // Limpia las filas de la tabla (FormArray)
  const rows = this.tableForm.get('rows') as FormArray;
  rows.clear(); // elimina todas las filas del FormArray
  this.dataSource.data= this.rows.controls;
}


}

