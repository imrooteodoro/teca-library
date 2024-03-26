import { Component } from '@angular/core';
import { LoginUiComponent } from "../../components/login-ui/login-ui.component";
import { RouterLink } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
    selector: 'app-admincad',
    standalone: true,
    //templateUrl: './admincad.component.html',
    template: `
<body>
<nav style="width:100%; height:150px;">
</nav>
<section id="login-area">
    <div class="container form">
        <div class="box-login">
            <img src="../../../../assets/biblioteca.png" alt="" width="50" height="50">
            <h3>ADMIN Area</h3>
            <input type="email" placeholder="Insira o seu email" required="btn">
            <input type="password" placeholder="Insira a sua senha">
            <button routerLink="/adminform" id="btn">Entrar</button>
            <div class="forgot-pass">
                <a href="#" routerLink="/reset">Esqueci a senha</a> 
              

            </div>
          
        </div>
    </div>
</section> 
</body>
  
  `,
    styleUrl: '../../components/login-ui/login-form/login-form.component.scss',
    imports: [LoginUiComponent, RouterLink]
})
export class AdmincadComponent {

}
