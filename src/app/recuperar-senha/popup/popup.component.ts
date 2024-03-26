import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  template: `
    <h1>Diálogo</h1>
    <p>Conteúdo da caixa de diálogo.</p>
  `, 
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  constructor(public dialogRef: MatDialogRef<PopupComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

}
