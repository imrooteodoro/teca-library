import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RomanceComponent } from '../romance/romance.component';

@Component({
  selector: 'app-programacao',
  standalone: true,
  imports: [RomanceComponent],
  //templateUrl: './programacao.component.html',
  template:`
  <div class="container">
    <div class="title-swiper"><h3>Programação</h3> </div>
    <swiper-container class="mySwiper" pagination="true" 
    pagination-clickable="true"  loop="true" slides-per-view="6"
    centered-slides="true" space-between="10" grab-cursor="true">
    <swiper-slide>
        <div class="book">
            <div class="avaliacao">
                <img src="../../../assets/star.png" alt="" width="5" height="5">
                <span>4.5</span>
            </div>
            <img src="../../../assets/prog/prog6.jpg" alt="" width="150" height="150">
            <div class="bookinfo">
                <span>
                    Título: XXXX <br>
                    Autor: XXXX<br>
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
            <img src="../../../assets/prog/prog5.jpg" alt="" width="150" height="150">
            <div class="bookinfo">
                <span>
                    Título: XXXX <br>
                    Autor: XXXX<br>
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
            <img src="../../../assets/prog/prog4.jpg" alt="" width="150" height="150">
            <div class="bookinfo">
                <span>
                    Título: XXXX <br>
                    Autor: XXXX<br>
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
            <img src="../../../assets/prog/prog3.jpg" alt="" width="150" height="150">
            <div class="bookinfo">
                <span>
                    Título: XXXX <br>
                    Autor: XXXX<br>
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
        <img src="../../../assets/prog/prog2.png" alt="" width="150" height="150">
        <div class="bookinfo">
            <span>
                Título: XXXX <br>
                Autor: XXXX<br>
                Ano: XXXX
            </span>
        </div>
    </div></swiper-slide>
    <swiper-slide>
        <div class="book">
            <div class="avaliacao">
                <img src="../../../assets/star.png" alt="" width="5" height="5">
                <span>4.5</span>
                <br>
            </div>
            <img src="../../../assets/prog/prog1.jpg" alt="" width="150" height="150">
            <div class="bookinfo">
                <span>
                    Título: XXXX <br>
                    Autor: XXXX<br>
                    Ano: XXXX
                </span>
            </div>
        </div>
    </swiper-slide>
  </swiper-container>
</div>
<div>
</div>
`,
  styleUrl: '../romance/romance.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProgramacaoComponent {

}
