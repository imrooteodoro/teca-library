import { Component } from '@angular/core';
import { LoginUiComponent } from "../../components/login-ui/login-ui.component";

@Component({
    selector: 'app-cadastro-ui',
    standalone: true,
    //templateUrl: './cadastro-ui.component.html',
    //template: `<app-login-ui/>`,
    styleUrl: './cadastro-ui.component.scss',

    styles:`

    h2{
        font-size: 15px;
    }
    #cadastro{
    width: 100%;
    height: 100vh;
    display: flex;
    background-color:whitesmoke;
}

.bannerbd{
    width: 100%;
    height: 100vh;
    font-size:15px;
    background-image: linear-gradient(to top, rgba(196, 55, 4, 0.7), rgb(243, 84, 10));
    p{
        color: wheat;
        text-shadow: 2px 3px 10px black;
    }


}

.formarea{
    width: 70%;
    height: 100vh;
    
}

.cadform{

    width:80%;
    height: 100vh;
    margin: auto;
    display: flex;
    flex-direction: column;

    width:50%;
    input{
        padding: 6px;
        border-radius: 4px 6px;
        border: solid 1px orangered;
        margin-left:5em;
        
    }
    label{
        
    }
    button{
        
        width: 100%;
        margin-left:5em;
        padding: 8px;
        color: wheat;
        background-color: orangered;
        text-transform: uppercase;
        border-radius: 4px 5px;
    }
    button:hover{
        background-color: transparent;
        border: solid 1px blue;
        color: blue;
        transition: 400ms;
    }
}
.name{
    margin-top: 2em;
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5em;
    input{
        width: 100%;
        margin-bottom:0.3em;
    }
    label{
        margin-left:1em;
        
        
    }
    .surname{
        width:90%;
    }
}

.address{
    margin-top: 1em;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5em;
    input{
        width: 40%;
        margin-left: 0.5em;
        margin-bottom: 1em;
    }
    label{
        margin-bottom: 3em;
        margin-left:1em;
        
        
    }
    .tel{
        width:330px;
    }
    .num{
        width:100px;
    }
    .bairro{
        width:350px;
    }
}
.text-banner{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:auto;
    margin: auto;
    h3{
        margin-top: 7em;
        text-transform: uppercase;
        color: wheat;
    }
}

.text1{
    width:50%;
    color: wheat;
    margin-bottom:1em;
}
.teca{
    visibility: hidden;
}



@media (max-width:468px){
    #cadastro{
        color: wheat;
        background-color:#ffb27a;
        width: 100%;
        height: 100vh;
    }
   .banner-cad{
    width:0%;
    visibility: hidden;
   }
   .name{
    color: rgb(245, 242, 242);
    width: 100%;
    #nome{
        width: 100%;
    }
    #surname{
        width:100%;
    }
    input{
        width: 100%;
    }
    button{
        width: 100%;
        background-color: orangered;
        text-align: center;
        margin-bottom: 2em;
        padding: 4px;
    }
   }
   .teca{
    color: wheat;
    width: 170px;
    margin-left: 7em;
    font-size: 13px;
    align-items: center;
    visibility: visible;
   }
   .formarea{
    
    height: 100vh;
   }

    
}
`,
    template:`
    <section id="cadastro">
    <div class="banner-cad" style="heigth:auto;">
        <div class="bannerbd">
            <div class="text-banner">
                <h3>Teca Library</h3>
                <img src="../../../assets/biblioteca.png" alt="" width="100" height="100">
                <div class="text1">
                    <h2>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Ex, labore. Quo eos quia 
                        iste ipsa quae nobis aliquam animi adipisci 
                        tenetur eum soluta ad non, provident 
                        facilis labore modi doloribus.</h2>

                </div>
                <p>{{tecalib}}</p>
            </div>
        </div>
    </div>
    <div class="formarea">
        <div class="formulario">
            <div class="cadform">
                <div class="name">
                    <label for="nome">Nome:</label>
                    <input  type="text" placeholder="Insira seu nome">
                    <label for="surname">Sobrenome:</label> 
                    <input type="text" placeholder="Insira seu sobrenome" id="surname">
                    <label for="logradouro">Logradouro:</label>
                    <input type="text" name="" id="logradouro" placeholder="Nome da Avenida ou Rua">
                       
                    <label for="numero" id="numero">Número:</label>
                    <input type="number" id="numero" class="num">
                    <label for="bairro">Bairro:</label>
                    <input type="text" id="bairro" placeholder="Bairro" class="bairro">
                    <label for="tel">Telefone:</label>
                    <input type="text" placeholder="Telefone: ex:(63) 9999-99999" id="tel">
                
                <label for="email">Email:</label>
                <input type="email" placeholder="Digite seu email">
                <label for="password">Senha:</label>
                <input type="password" placeholder="Escolha uma senha" id="password">
                <label for="password">Repita sua senha:</label>
                <input type="password" placeholder="Confirme a sua senha" id="password">
                <button>Cadastrar</button>
                <div class="teca">
                 <span>{{tecalib}}
                </span></div>
                </div>
            </div>
        </div>
    </div>
</section> 
`,
    imports: [LoginUiComponent]
})
export class CadastroUiComponent {
    public tecalib = '@Teca Library 2024';
}
