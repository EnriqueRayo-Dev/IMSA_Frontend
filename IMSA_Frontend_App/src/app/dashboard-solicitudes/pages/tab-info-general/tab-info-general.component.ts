import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
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
import { Producto } from '../../../solicitudes-de-compra/interfaces/producto';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Solicitud } from '../../../solicitudes-de-compra/interfaces/solicitud';


@Component({
  selector: 'app-tab-info-general',
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
  templateUrl: './tab-info-general.component.html',
  styleUrl: './tab-info-general.component.scss'
})
export class TabInfoGeneralComponent implements OnInit{

  public btnMostrarAgregar: boolean = false;
  public productosGuardados: Producto[] = [];
  tableForm: FormGroup;
  solicitudForm: FormGroup;
  isSubmitted = false;
  displayedColumns = ['item', 'descripcion', 'unidad','cantidadRequerida','precio','subTotal','acciones'];
  dataSource = new MatTableDataSource<AbstractControl>();

   ngOnInit(): void {
   
    this.solicitudForm.patchValue({
      fechaSolicitud: this.data.fechaSolicitud,
      numeroScSolicitud: this.data.numeroScSolicitud,
      nombreSolicitante: this.data.nombreSolicitante,
      numeroFolio: this.data.numeroFolio,
      fechaReciboUCC: this.data.fechaReciboUCC,
      encargadoAdquisicion: this.data.encargadoAdquisicion,
      email: this.data.emailAdquisiciones,
      telefono: this.data.telefonoAdquisiciones
    });

    const productosArray = this.tableForm.get('rows') as FormArray;
    productosArray.clear();
     this.data.producto.forEach(producto => {
      productosArray.push(this.fb.group({
        descripcion: [producto.descripcion],
        unidad: [producto.unidad],
        cantidadRequerida: [producto.cantidadRequerida],
        precio: [producto.precio],
        subTotal: [producto.subTotal]
      }));
    });

    this.dataSource.data = productosArray.controls;
    this.isSubmitted = true;
    this.btnMostrarAgregar = true;
  }
  
  constructor(private fb: FormBuilder,private cd: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: Solicitud
  ) {

     this.solicitudForm = this.fb.group({
     fechaSolicitud: [''],
     numeroScSolicitud: ['',''],
     nombreSolicitante: ['', ''],
     numeroFolio: ['', ''],
     fechaReciboUCC: ['', ''],
     encargadoAdquisicion: ['', ''],
     email: ['', ''],
     telefono: ['', '']
    });

    this.tableForm = this.fb.group({
      rows: this.fb.array([]),
    });
    this.dataSource = new MatTableDataSource(this.rows.controls);
  }
 

  get rows(): FormArray {
    return this.tableForm.get('rows') as FormArray;
  }

  addRow() {
    this.isSubmitted = false;
    const row = this.fb.group({
       descripcion: ['',''],
       unidad: ['',''],
       precio: [''],
       cantidadRequerida: ['',''],
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
      
  }

public esTablaVacia(): boolean {
  if (this.dataSource.data.length === 0) return true;

  for (let row of this.rows.controls) {
    if (
      !row.get('descripcion')?.value ||
      !row.get('unidad')?.value ||
      !row.get('cantidadRequerida')?.value ||
      !row.get('precio')?.value
    ) {
      return true; 
    }
  }

  return false; 
}


}
