let verso=['bobrossparrot','explodyparrot','fiestaparrot','metalparrot',
'revertitparrot','tripletsparrot','unicornparrot'];
let frente=['front'];
let k=i=j=controle=0;
let array2=[];

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

}}

iniciarJogo();

function flip(cartaEscolhida){

   statusSelecao = cartaEscolhida.querySelector('.frente');
   let status=statusSelecao.classList.contains('girarFrente');

   if(status===false){
    frenteCard = cartaEscolhida.querySelector('.frente');
    frenteCard.classList.add('girarFrente');
    versoCard = cartaEscolhida.querySelector('.verso');
    versoCard.classList.add('girarVerso');
   }

   else{
    frenteCard = cartaEscolhida.querySelector('.frente');
    frenteCard.classList.remove('girarFrente');
    versoCard = cartaEscolhida.querySelector('.verso');
    versoCard.classList.remove('girarVerso');
   }
}
