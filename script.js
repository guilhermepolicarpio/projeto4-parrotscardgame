let verso=['bobrossparrot','explodyparrot','fiestaparrot','metalparrot',
'revertitparrot','tripletsparrot','unicornparrot'];
let frente=['front'];
let k=0;

function iniciarJogo(){
    quantidadeCartas=prompt('Com quantas cartas você pretender jogar? Valores válidos: números pares entre 4 e 14');

    if(quantidadeCartas <4 || quantidadeCartas>14){
        alert("Favor inserir um numero entre 4 e 14");
        iniciarJogo();
    }

    if((quantidadeCartas%2)!== 0){
        alert("Favor inserir um numero par entre 4 e 14");
        iniciarJogo();
    }

    let i = 0;
    let controle=0;
while(k<quantidadeCartas){
   // for(let i=0; i < quantidadeCartas; i=i+0.5){
        let blocoJogo = document.querySelector('blocoJogo');
        blocoJogo.innerHTML +=`
        <div class="carta" onclick="flip(this)">    
            <div class="layout-card ">
            <img src="Imagens/${verso[i]}.gif" alt="${verso[i]}">
            </div>
            <div class="layout-card verso">
            <img src="Imagens/front.svg">
            </div>
        </div>     
        `
    k=k+1;
    if(controle <1){
        controle = controle+1;
    }
    else{
     i=i+1;
     controle=0;
    }
}}

iniciarJogo();

function flip(cartaEscolhida){
   // frenteCard = cartaEscolhida.querySelector('.frente');
   // frenteCard.classList.add('girarFrente');
    versoCard = cartaEscolhida.querySelector('.verso');
    versoCard.classList.add('girarVerso');

}