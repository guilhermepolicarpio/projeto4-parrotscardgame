let verso=['bobrossparrot','explodyparrot','fiestaparrot','metalparrot',
'revertitparrot','tripletsparrot','unicornparrot'];
let frente=['front'];
let quantidadeCartas=numeroJogadas=contador=bloqueio=carta1=selecionada1=selecionada2=k=i=j=controle=0;
let src1=src2=null;
let cartasSelecionadas=array2=[];

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

    verso.sort(comparador);
    verso = verso.slice(0, quantidadeCartas/2);

    for (let i = 0; i < verso.length; i++) {
        array2[i] = verso[i];
      }
    array2.sort(comparador);
    
    function comparador() {
        return Math.random() - 0.5;
    }

while(k<quantidadeCartas){

    if(controle===1){
        let blocoJogo = document.querySelector('blocoJogo');
        blocoJogo.innerHTML +=`
        <div class="carta" onclick="flip(this)">    
            <div class="layout-card frente">
            <img src="Imagens/${verso[i]}.gif" alt="${verso[i]}">
            </div>
            <div class="layout-card verso">
            <img src="Imagens/front.svg">
            </div>
        </div>     
        `
    k=k+1; i=i+1; controle=0;
    }

    else{
        let blocoJogo = document.querySelector('blocoJogo');
        blocoJogo.innerHTML +=`
        <div class="carta" onclick="flip(this)">    
            <div class="layout-card frente">
            <img src="Imagens/${array2[j]}.gif" alt="${array2[j]}">
            </div>
            <div class="layout-card verso">
            <img src="Imagens/front.svg">
            </div>
        </div>     
        `
    k=k+1; j=j+1; controle= 1;
    }
}
}

iniciarJogo();

function flip(cartaEscolhida){

if(bloqueio===0){
   statusSelecao = cartaEscolhida.querySelector('.frente');
   let status=statusSelecao.classList.contains('girarFrente');

   if(status === false){
    frenteCard = cartaEscolhida.querySelector('.frente');
    versoCard = cartaEscolhida.querySelector('.verso');
    virar(frenteCard,versoCard);

        cartasSelecionadas=document.querySelectorAll('.girarFrente')

        if(cartasSelecionadas.length %2===1){
            selecionada1=cartaEscolhida.querySelector('img');
            src1=selecionada1.getAttribute('src');
            carta1=cartaEscolhida;
            src2=null;
            console.log("oi");
        }
        else{
            selecionada2=cartaEscolhida.querySelector('img');
            src2=selecionada2.getAttribute('src');
        }

        numeroJogadas=numeroJogadas+1;
     
        if (src1 === src2) {
            contador = contador + 2;
        } 
        else if (src1 !== src2 && src2 !== null) {
            bloqueio = 1;
            setTimeout(desvirar, 1000);
        }

        if(contador == quantidadeCartas){
            console.log(contador);
            setTimeout(fim, 500);
        }
   }
}
}
function desvirar(){
    frenteCard.classList.remove('girarFrente');
    versoCard.classList.remove('girarVerso');
    frenteCard=carta1.querySelector('.frente');
    versoCard=carta1.querySelector('.verso');
    frenteCard.classList.remove('girarFrente');
    versoCard.classList.remove('girarVerso');
    bloqueio=0;
}

function virar(frenteCard, versoCard){
    frenteCard.classList.add('girarFrente');
    versoCard.classList.add('girarVerso');
}

function fim(){
    alert(`Você ganhou em ${numeroJogadas} jogadas!`);
}