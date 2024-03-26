import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-xadrez',
  standalone: true,
  imports: [],
  //templateUrl: './xadrez.component.html',
  template:`
  <div class="container">
    <div class="title-swiper"><h3>Xadrez</h3> </div>
    <swiper-container class="mySwiper" pagination="true" 
    pagination-clickable="true"  loop="true" slides-per-view="6"
    centered-slides="true" space-between="10" grab-cursor="true">
    <swiper-slide>
        <div class="book">
            <div class="avaliacao">
                <img src="../../../assets/star.png" alt="" width="5" height="5">
                <span>4.5</span>
            </div>
            <img src="../../../assets/xadrez/xadrez1.jpg" alt="" width="150" height="150">
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
            <img src="../../../assets/xadrez/xadrez2.jpeg" alt="" width="150" height="150">
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
            <img src="../../../assets/xadrez/xadrez3.jpg" alt="" width="150" height="150">
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
            <img src="../../../assets/xadrez/xadrez4.webp" alt="" width="150" height="150">
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
            <img src="../../../assets/xadrez/xadrez5.webp" alt="" width="150" height="150">
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
            <img src="../../../assets/xadrez/xadrez3.jpg" alt="" width="150" height="150">
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
            <img src="../../../assets/xadrez/xadrez5.webp" alt="" width="150" height="150">
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
            <img src="../../../assets/xadrez/xadrez2.jpeg" alt="" width="150" height="150">
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
            <img src="../../../assets/xadrez/xadrez4.webp" alt="" width="150" height="150">
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
            <img src="../../../assets/xadrez/xadrez2.jpeg" alt="" width="150" height="150">
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
        <img src="../../../assets/xadrez/xadrez1.jpg" alt="" width="150" height="150">
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
            <img src="../../../assets/xadrez/xadrez1.jpg" alt="" width="150" height="150">
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
export class XadrezComponent {

}
