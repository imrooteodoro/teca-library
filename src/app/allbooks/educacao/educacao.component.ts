import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-educacao',
  standalone: true,
  imports:[],
  //templateUrl: './educacao.component.html',
  template:`
  <div class="container">
    <div class="title-swiper"><h3>Educação</h3> </div>
    <swiper-container class="mySwiper" pagination="true" 
    pagination-clickable="true"  loop="true" slides-per-view="6"
    centered-slides="true" space-between="10" grab-cursor="true">
    <swiper-slide>
        <div class="book">
            <div class="avaliacao">
                <img src="../../../assets/star.png" alt="" width="5" height="5">
                <span>4.5</span>
            </div>
            <img src="../../../assets/romance/fiodor.jpg" alt="" width="150" height="150">
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
            <img src="../../../assets/romance/fortune.jpg" alt="" width="150" height="150">
            <div class="bookinfo">
                <span>
                    Título: Soul <br>
                    Autor: XXXX <br>
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
            <img src="../../../assets/romance/gen.jpg" alt="" width="150" height="150">
            <div class="bookinfo">
                <span>
                    Título: XXXX <br>
                    Autor: XXXX <br>
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
            <img src="../../../assets/romance/gen4.jpg" alt="" width="150" height="150">
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
            <img src="../../../assets/ruleschess.jpg" alt="" width="150" height="150">
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
            <img src="../../../assets/bookcover.jpg" alt="" width="150" height="150">
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
            <img src="../../../assets/pequeno.jpg" alt="" width="150" height="150">
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
            <img src="../../../assets/orange.jpeg" alt="" width="150" height="150">
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
            <img src="../../../assets/harry.jpg" alt="" width="150" height="150">
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
            <img src="../../../assets/cover2.jpeg" alt="" width="150" height="150">
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
        <img src="../../../assets/red.avif" alt="" width="150" height="150">
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
            <img src="../../../assets/red2.jpg" alt="" width="150" height="150">
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
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class EducacaoComponent {

}
