import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginUiComponent } from '../components/login-ui/login-ui.component';
import { RecomendadosComponent } from './recomendados/recomendados.component';


@Component({
  selector: 'app-guiuser',
  standalone: true,
  imports: [RouterLink, LoginUiComponent, RecomendadosComponent],
  template:`
  <body>
  <app-login-ui/>
  <section id="subnav">
    <div class="nav">
        <div class="container">
            <div class="search-bar">
                <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Sed, suscipit. Ex, excepturi eos iste 
                     rerum eveniet repellendus animi
                     eum quod aspernatur quam aperiam magni, vero illum assumenda neque, atque ut!</h3>
                     
                     <input type="text" name="" id="search" placeholder="Pesquise pelo nome do livro ou pelo nome do autor">
                     <label for="search"><button> <img src="../../assets/search.svg" alt=""></button></label>
                     <a routerLink="#">Pesquisa avançada</a>
                     <hr>
                     <span>+ de (n) livros físicos</span> | <span>Diversos gêneros literários | Obras literárias em diversas línguas</span>
            </div>
            <div class="user-area">
                <div class="profilepic" style="background-image: url('../../assets/profile/adv2.jpg');background-size:cover;">
                    <label for="myfile" ></label>
                    <div class="text">

                        <button>Editar perfil</button>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
  </section>
  <app-recomendados/>
  </body>`,
  //templateUrl: './guiuser.component.html',
  styleUrl: './guiuser.component.scss'
})
export class GuiuserComponent {

}
