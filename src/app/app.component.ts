import { Component } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginUiComponent } from "./components/login-ui/login-ui.component";
import { LoginFormComponent } from "./components/login-ui/login-form/login-form.component";
import { CadastroUiComponent } from './cadastro/cadastro-ui/cadastro-ui.component';
import { GuiuserComponent } from './guiuser/guiuser.component';
import { AdmincadComponent } from './adminlogin/admincad/admincad.component';


@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <router-outlet></router-outlet>
  `,
    imports: [RouterOutlet, LoginUiComponent, LoginFormComponent, CadastroUiComponent, GuiuserComponent, RouterLink, AdmincadComponent, LoginUiComponent]
})
export class AppComponent {
  title = 'Teca Library';
}
