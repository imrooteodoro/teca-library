
import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {
  register as registerSwiperElements,
} from 'swiper/element/bundle';
import { LoginUiComponent } from '../../components/login-ui/login-ui.component';
import { CommonModule } from '@angular/common';
import { AllbooksComponent } from '../../allbooks/allbooks.component';
import { RomanceComponent } from '../../allbooks/romance/romance.component';
import { EducacaoComponent } from '../../allbooks/educacao/educacao.component';
import { ProgramacaoComponent } from '../../allbooks/programacao/programacao.component';
import { XadrezComponent } from '../../allbooks/xadrez/xadrez.component';
import { OutrosComponent } from '../../allbooks/outros/outros.component';

registerSwiperElements();

@Component({
  selector: 'app-recomendados',
  standalone: true,
  imports: [ CarouselModule, RouterLink, LoginUiComponent, CommonModule, AllbooksComponent, RomanceComponent, EducacaoComponent, ProgramacaoComponent, XadrezComponent, OutrosComponent],
  template:`
     
      <div class="container">
        <div class="title-swiper"><h3>Recomendados</h3> </div>
        <swiper-container class="mySwiper" pagination="true" 
        pagination-clickable="true"  loop="true" slides-per-view="6"
        centered-slides="true" space-between="10" grab-cursor="true">
        <swiper-slide>
            <div class="book">
                <div class="avaliacao">
                    <img src="../../../assets/star.png" alt="" width="5" height="5">
                    <span>4.5</span>
                </div>
                <img src="../../../assets/bookcover.jpg" alt="" width="150" height="150">
                <div class="bookinfo">
                    <span>
                        Título: XXXX <br>
                        Autor:XXXX<br>
                        Ano: XXXX
                    </span>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="book">
                <div class="avaliacao">
                    <img src="../../../assets/star.png" alt="" width="5" height="5">
                    <span>4.5</span>
                </div>
                <img src="../../../assets/bobby.jpg" alt="" width="150" height="150">
                <div class="bookinfo">
                    <span>
                        Título: Soul
                        Autor: XXXX 
                        Ano: XXXX
                    </span>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="book">
                <div class="avaliacao">
                    <img src="../../../assets/star.png" alt="" width="5" height="5">
                    <span>4.5</span>
                </div>
                <img src="../../../assets/chess.png" alt="" width="150" height="150">
                <div class="bookinfo">
                    <span>
                        Título: XXXX 
                        Autor: XXXX 
                        Ano: XXXX
                    </span>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="book">
                <div class="avaliacao">
                    <img src="../../../assets/star.png" alt="" width="5" height="5">
                    <span>4.5</span>
                </div>
                <img src="../../../assets/bobby.jpg" alt="" width="150" height="150">
                <div class="bookinfo">
                    <span>
                        Título: XXXX 
                        Autor: XXXX
                        Ano: XXXX
                    </span>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="book">
                <div class="avaliacao">
                    <img src="../../../assets/star.png" alt="" width="5" height="5">
                    <span>4.5</span>
                </div>
                <img src="../../../assets/xadrez3.jpg" alt="" width="150" height="150">
                <div class="bookinfo">
                    <span>
                        Título: XXXX 
                        Autor: XXXX
                        Ano: XXXX
                    </span>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="book">
                <div class="avaliacao">
                    <img src="../../../assets/star.png" alt="" width="5" height="5">
                    <span>4.5</span>
                </div>
                <img src="../../../assets/bookcover.jpg" alt="" width="150" height="150">
                <div class="bookinfo">
                    <span>
                        Título: XXXX 
                        Autor: XXXX
                        Ano: XXXX
                    </span>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="book">
                <div class="avaliacao">
                    <img src="../../../assets/star.png" alt="" width="5" height="5">
                    <span>4.5</span>
                </div>
                <img src="../../../assets/pequeno.jpg" alt="" width="150" height="150">
                <div class="bookinfo">
                    <span>
                        Título: XXXX 
                        Autor: XXXX
                        Ano: XXXX
                    </span>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="book">
                <div class="avaliacao">
                    <img src="../../../assets/star.png" alt="" width="5" height="5">
                    <span>4.5</span>
                </div>
                <img src="../../../assets/orange.jpeg" alt="" width="150" height="150">
                <div class="bookinfo">
                    <span>
                        Título: XXXX
                        Autor: XXXX
                        Ano: XXXX
                    </span>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="book">
                <div class="avaliacao">
                    <img src="../../../assets/star.png" alt="" width="5" height="5">
                    <span>4.5</span>
                </div>
                <img src="../../../assets/harry.jpg" alt="" width="150" height="150">
                <div class="bookinfo">
                    <span>
                        Título: XXXX 
                        Autor: XXXX
                        Ano: XXXX
                    </span>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="book">
                <div class="avaliacao">
                    <img src="../../../assets/star.png" alt="" width="5" height="5">
                    <span>4.5</span>
                </div>
                <img src="../../../assets/cover2.jpeg" alt="" width="150" height="150">
                <div class="bookinfo">
                    <span>
                        Título: XXXX 
                        Autor: XXXX
                        Ano: XXXX
                    </span>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide><div class="book">
            <div class="avaliacao">
                <img src="../../../assets/star.png" alt="" width="5" height="5">
                <span>4.5</span>
                <br>
            </div>
            <img src="../../../assets/red.avif" alt="" width="150" height="150">
            <div class="bookinfo">
                <span>
                    Título: XXXX 
                    Autor: XXXX
                    Ano: XXXX
                </span>
            </div>
        </div></swiper-slide>
        <swiper-slide>
            <div class="book">
                <div class="avaliacao"
                Google
                seta de next>
                    <img src="../../../assets/star.png" alt="" width="5" height="5">
                    <span>4.5</span>
                    <br>
                </div>
                <img src="../../../assets/red2.jpg" alt="" width="150" height="150">
                <div class="bookinfo">
                    <span>
                        Título: XXXX 
                        Autor: XXXX
                        Ano: XXXX
                    </span>
                </div>
            </div>
        </swiper-slide>
      </swiper-container>
      <div class="arraste" style="align-items: center; display:flex;justify-content:center;"> <img src="../../assets/arraste.svg" alt="" width="150" height="150"></div> 
      <hr>
      <div class="categorias">
            <a (click)="toggleComponent('todos')" [class.disabled]="botaoAtivo === 'todos'">Todos os livros</a>
            <a (click)="toggleComponent('romance')" [class.disabled]="botaoAtivo === 'romance'" id="romance">Romance</a>
            <a (click)="toggleComponent('educacao')" [class.disabled]="botaoAtivo === 'educacao'" id="educacao">Educação</a>
            <a (click)="toggleComponent('xadrez')" id="xadrez" [class.disabled]="botaoAtivo === 'xadrez'">Xadrez</a>
            <a (click)="toggleComponent('programacao')" id="prog" [class.disabled]="botaoAtivo === 'programacao'">Programação</a> 
            <a (click)="toggleComponent('outros')" id="outros" [class.disabled]="botaoAtivo === 'outros'">Outros</a> 
      </div>
</div>
<div>
</div>

  <div>
      <app-allbooks *ngIf="mostrarComponente"></app-allbooks>
      <app-romance *ngIf="mostrarRomance"></app-romance>
      <app-educacao *ngIf="mostrarEducacao"></app-educacao>
      <app-programacao *ngIf="mostrarProgramacao"> </app-programacao>
      <app-xadrez *ngIf="mostrarXadrez"/>
      <app-outros *ngIf="mostrarOutros"/>

`,
  //templateUrl: './recomendados.component.html',
  styleUrl: './recomendados.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class RecomendadosComponent { 
    botaoAtivo: string | null = null;
    toggleComponent(genero: string) {
        if (this.botaoAtivo === genero) {
            this.botaoAtivo = null; // Desativa o botão se ele já estiver ativado
          } else {
            this.botaoAtivo = genero;
          }
        this.mostrarComponente = false;
        this.mostrarComponente = genero === 'todos';
        this.mostrarRomance = genero === 'romance';
        this.mostrarEducacao = genero === 'educacao';
        this.mostrarXadrez = genero == 'xadrez';
        this.mostrarProgramacao = genero == 'programacao';
        this.mostrarOutros = genero == 'outros';
    }
  mostrarComponente = true;
  mostrarEducacao = false;
  mostrarRomance = false;
  mostrarXadrez = false;
  mostrarProgramacao = false;
  mostrarOutros = false;
  

}



    

