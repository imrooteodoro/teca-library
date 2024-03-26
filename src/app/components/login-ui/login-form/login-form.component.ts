import { Component } from '@angular/core';
import { LoginUiComponent } from "../login-ui.component";
import { routes } from '../../../app.routes';
import { RouterLink } from '@angular/router';
import { RecuperarSenhaComponent } from '../../../recuperar-senha/recuperar-senha.component';


@Component({
    selector: 'app-login-form',
    standalone: true,
    //templateUrl: './login-form.component.html',
    template: `<body>
<app-login-ui/>
<section id="login-area">
    <div class="container form">
        <div class="box-login">
            <img src="../../../../assets/biblioteca.png" alt="" width="50" height="50">
            <h3>Login</h3>
            <input type="email" placeholder="Insira o seu email" required="btn">
            <input type="password" placeholder="Insira a sua senha">
            <button routerLink="/user=id" id="btn">Entrar</button>
            <div class="forgot-pass">
                <a href="#" routerLink="/reset">Esqueci a senha</a> 
                <a routerLink="/cadastro">Não possuo cadastro</a>

            </div>
            <div class="footer-form">
                {{copyright}}
                <br>
                <p>
                </p>

            </div>
        </div>
    </div>
</section> 
</body>
`,
    styleUrl: './login-form.component.scss',
    imports: [LoginUiComponent,RouterLink, RecuperarSenhaComponent,]
})
export class LoginFormComponent {
      public copyright = '@Teca Library 2024';
      public rights = 'Todos os direitos reservados';
}
