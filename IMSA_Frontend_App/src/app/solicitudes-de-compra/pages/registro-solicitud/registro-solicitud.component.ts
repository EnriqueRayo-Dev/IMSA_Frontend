import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-solicitud',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './registro-solicitud.component.html',
  styleUrl: './registro-solicitud.component.scss'
})
export class RegistroSolicitudComponent {
 form: FormGroup;

  constructor(private router: Router){
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      adress: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(8)])
    });
  }
onSubmit() {
  this.router.navigateByUrl('/dashboard/solicitudes-de-compra/exitoso');
    }
}
