import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterLink } from '@angular/router';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-recuperar-senha',
  standalone: true,
  imports: [RouterLink],
  template: `
  <section id="reset-pass">
    <div class="reset-box">
        <h1>TECA LIBRARY</h1>
        <img src="../../assets/biblioteca.png" alt="" width="70" height="70">
        <div class="reset-form">
           <p>Você esqueceu a sua senha? Aqui você poderá facilmente criar uma nova.
        </p> 
        <input type="text" placeholder="Email">
        <button mat-button (click)="openDialog()">Alterar a senha</button>

             <span>-OU-</span>
        <button routerLink="/cadastro">Criar conta</button>
 <div class="info" style="text-align: center; margin-top:0.6em;color:gray;border: solid 1px wheat;">{{tecalib
 }}</div>
        </div>
    </div>

</section>`,
  //templateUrl: './recuperar-senha.component.html',
  styleUrl: './recuperar-senha.component.scss'
})
export class RecuperarSenhaComponent {

  public tecalib = '@Teca Library 2024'
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('diálogo fechado');
    });
  }

  

}
