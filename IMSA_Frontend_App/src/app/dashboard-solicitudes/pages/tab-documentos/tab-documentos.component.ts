import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

@Component({
  selector: 'app-tab-documentos',
  standalone: true,
  imports: [ CommonModule,
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
      MatIconModule,],
  templateUrl: './tab-documentos.component.html',
  styleUrl: './tab-documentos.component.scss'
})
export class TabDocumentosComponent  implements OnInit{

ngOnInit(): void {
 
}
uploadCards: { file: File | null, fileName: string }[] = [
  { file: null, fileName: '' }
];

triggerFileInput(index: number): void {
  const input = document.getElementById('fileInput' + index) as HTMLInputElement;
  if (input) input.click();
}

onFileSelected(event: Event, index: number): void {
  const input = event.target as HTMLInputElement;
  if (input?.files?.length) {
    const file = input.files[0];
    this.uploadCards[index].file = file;
    this.uploadCards[index].fileName = file.name;
  }
}

downloadFile(index: number): void {
  const file = this.uploadCards[index].file;
  if (!file) return;

  const blobUrl = URL.createObjectURL(file);
  const a = document.createElement('a');
  a.href = blobUrl;
  a.download = file.name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(blobUrl);
}

addCard(): void {
  this.uploadCards.push({ fileName: '', file: null });
}


}
