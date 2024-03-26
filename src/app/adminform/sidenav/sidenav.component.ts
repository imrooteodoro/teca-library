import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],
  //templateUrl: './sidenav.component.html',
  template:`
   <li>
    <button>Cadastrar usuário</button>
    <button>Remover usuário</button>
    <button>Cadastrar livro</button>
    <button>Remover livro</button>
    <button>Relatórios</button>
    
   </li>
  `,
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  

  
}
