import { Component } from '@angular/core';
import { LoginUiComponent } from "../components/login-ui/login-ui.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-adminform',
    standalone: true,
    //templateUrl: './adminform.component.html',
    template: `
  <app-login-ui/>
  <div class="content">
    <button (click)="toggleSidebar()" class="button">Mais opções</button>
    <div class="sidebarnet" [ngClass]="{'active':sidebarNet}">
        <button (click)="toggleSidebarNet()" class="button2">X</button>
  
    <div class="sidebar" [ngClass]="{'active': sidebarOpen}">
        <button (click)="toggleSidebar()" class="button2">X</button>
         <app-sidenav/>
        </div>
    </div>
    <hr>
    <div class="form">
    <label for="">Nome do Livro:</label>
    <input type="text" placeholder="Nome do livro">
    <label for="">Autor</label>
    <input type="text" placeholder="Autor">
    <label for="">Genero</label>
    <input type="text" placeholder="genero">
    <label for="">ISBN</label>
    <input type="text" placeholder="ISBN">
    <label for="">Nº da prateleira</label>
    <input type="number" placeholder="N plateleira">
    <button>Salvar</button>
    </div>
    
</div>

  
  
  `,
    styleUrl: './adminform.component.scss',
    imports: [LoginUiComponent, SidenavComponent, CommonModule]
})
export class AdminformComponent {
  isSideNavOpen = false;

  openSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }
  sidebarOpen = false;
  sidebarNet = false;
  subnetCal = false;
  sideCal = false;

  toggleSideCal(){
    this.sideCal = !this.sideCal;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  toggleSidebarNet(){
    this.sidebarNet = !this.sidebarNet;
  }
  toggleSubnetCal(){
    this.subnetCal = !this.subnetCal;
  }

}
