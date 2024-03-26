import { Routes } from '@angular/router';
import { CadastroUiComponent } from './cadastro/cadastro-ui/cadastro-ui.component';
import { LoginUiComponent } from './components/login-ui/login-ui.component';
import { LoginFormComponent } from './components/login-ui/login-form/login-form.component';
import { RecuperarSenhaComponent } from './recuperar-senha/recuperar-senha.component';
import { GuiuserComponent } from './guiuser/guiuser.component';
import { AdmincadComponent } from './adminlogin/admincad/admincad.component';
import { AdminformComponent } from './adminform/adminform.component';


export const routes: Routes = [
    {path: '', component: LoginFormComponent},
    {path: '', component: LoginUiComponent},
    {path:'cadastro', component:CadastroUiComponent},
    {path:'reset', component:RecuperarSenhaComponent},
    {path:'user=id', component:GuiuserComponent},
    {path:'admincad', component:AdmincadComponent},
    {path:'adminform', component:AdminformComponent}

];
