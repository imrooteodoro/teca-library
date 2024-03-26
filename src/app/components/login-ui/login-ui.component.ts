import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AdmincadComponent } from '../../adminlogin/admincad/admincad.component';

@Component({
  selector: 'app-login-ui',
  standalone: true,
  imports: [RouterLink, AdmincadComponent],
  //templateUrl: './login-ui.component.html',
  template: `
  <header> 
      <div class="container">
          <nav id="navbar">
              <div class="nav-align">
                  <div class="nav-logo">
                      <img src="../../../assets/biblioteca.png" alt="" width="50" height="50">
                      <span>TECA LIBRARY</span>
                  </div>
                  <div class="admin">
              <a routerLink="/admincad">
                   <img src="../../../../assets/admin/icon-admin(1).svg" alt="" width="40" height="40">
                   <span>ADMIN</span>
              </a>
              </div>
              </div>
            
          </nav>
      </div>
  </header>
  `,
  styleUrl: './login-ui.component.scss'
})
export class LoginUiComponent {

}
