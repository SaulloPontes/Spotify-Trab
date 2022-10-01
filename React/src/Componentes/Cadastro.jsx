import { useState } from 'react'
import './Cadastro.modules.css'
function Cadastro() {

    const[nomePerfil, setNomePerfil ] = useState()

    function cadastrando(e){
        e.preventDefault()
        console.log('cadastro com sucesso' + nomePerfil)
    }

    return (
    <> 
    <div class="container-sm border border-dark b-shadow w-50 mt-5 p-3 mb-5 bg-black ">

<div class="row text-center ">
    <div class="col-sm">
        <a href="../HomePage/home page.html">
        <img src="../login/Spotify.png" width="240px" alt=""/>
        </a>
    </div>
</div>       
<div class="row text-center ">
            <div class="col-sm p-3 ">
                <h1 style={{color:'green'}}>Inscreva-se grátis e comece a curtir.</h1>
                <div class="d-grid gap-2 col-sm-6 mx-auto">

                    <button class="btn btn-primary" type="button"> <span><img src="../img/facebook-logo.png"
                                width="30px" alt=""/></span> Inscreva-se com o Facebook</button>
                    <button class="btn btn-light" type="button"> <span><img src="../img/Google-logo.png" width="30px"
                                alt=""/></span> Inscreva-se com o Google</button>
                </div>
            </div>

        </div>  

       
        <div class="row">
            <div class="col-sm p-3">
                <form action="" onSubmit={e => cadastrando(e)} >

                    <label for="email" class="form-label">Qual é o seu e-mail?</label>
                    <input type="email" class="form-control" required id="email" aria-describedby="emailHelp"
                        placeholder="digite seu e-mail"/>

                    <label for="confirmar-email" class="form-label">Confirme seu e-mail</label>
                    <input type="email" placeholder="Insira o e-mail novamente" class="form-control" required
                        id="confirmar-email" aria-describedby="emailHelp"/>

                    <label for="senha" class="form-label">Crie uma senha</label>
                    <input type="password" placeholder="Crie uma senha." class="form-control" required id="senha"
                        aria-describedby="emailHelp"/>

                    <label for="nomePerfil" class="form-label">Como devemos chamar você?</label>
                    <input type="text" placeholder="Insira um nome de perfil" class="form-control" required
                        id="nomePerfil" aria-describedby="emailHelp" onChange={(e)=>setNomePerfil(e.target.value)}/>
                    <div id="emailHelp" class="form-text" style={{color: 'gray'}}>Isso aparece no seu perfil.
                    </div>

                    <label for="nascimento" class="form-label">Qual a sua data de nascimento?</label>

                    <div class="row ">

                        <div class="col ">

                            <label for="dia" class="form-label">Dia</label>
                            <input type="number" placeholder="DD" class="form-control w-50" required id="dia"
                                aria-describedby="emailHelp"/>
                        </div>

                        <div class="col ">

                            <label for="mes" class="form-label">Mês</label>
                            <select class="form-select w-50 mt-2" id="mes" required aria-label="Default select example">
                                <option value="0">Mês</option>
                                <option value="1">janeiro</option>
                                <option value="2">fevereiro</option>
                                <option value="3">março</option>
                                <option value="1">abril</option>
                                <option value="2">maio</option>
                                <option value="3">junho</option>
                                <option value="1">julho</option>
                                <option value="2">agosto</option>
                                <option value="3">setembro</option>
                                <option value="1">outubro </option>
                                <option value="2">novembro </option>
                                <option value="3">dezembro</option>
                            </select>

                        </div>

                        <div class="col">
                            <label for="ano" class="form-label">ano</label>
                            <input type="number" placeholder="AAAA" class="form-control w-50" required id="ano"
                                aria-describedby="emailHelp"/>
                        </div>


                    </div>

                    <div class="mt-3  genero">
                        <label for="">Qual é o seu gênero?</label>
                        <input type="radio" id="masculino" name="genero"/>
                        <label for="masculino">Masculino</label>

                        <input type="radio" id="feminino" name="genero"/>
                        <label for="feminino">Feminino</label>

                        <input type="radio" id="nao-binario" name="genero"/>
                        <label for="nao-binario">Não binário</label>
                    </div>

                    <div class="caixa">



                        <label for="marketing-Spotify">Não quero receber mensagens de marketing do Spotify</label>
                        <input type="checkbox" id="marketing-Spotify"/>


                        <label for="marketing-Spotify">Compartilhar meus dados cadastrais com os provedores de conteúdo
                            do Spotify para fins de marketing.</label>
                        <input type="checkbox" id="marketing-Spotify"/>


                        <label for="marketing-Spotify">Eu concordo com os <a
                                href="https://www.spotify.com/br/legal/end-user-agreement/">Termos e Condições de Uso do
                                Spotify.</a></label>
                        <input type="checkbox" id="marketing-Spotify" required/>
                    </div>

                    <div class="row text-center mt-3">
                        <div class="col">
                            <p>Para saber mais sobre como o Spotify coleta, utiliza, compartilha e protege seus dados
                                pessoais, leia a <a href="https://www.spotify.com/br/legal/privacy-policy/"> Política de
                                    Privacidade do Spotify.</a></p>

                            <button class="btn inc" type="submit">Inscreva-se</button>
                            <p>Já tem uma conta? <a href="../login/login.html">Faça login.</a></p>
                        </div>
                    </div>

                </form>
            </div>
        </div>


    </div>

    <script src="../bootstrap/bootstrap.bundle.min.js"></script>

     </>
                                        )
}

export default Cadastro