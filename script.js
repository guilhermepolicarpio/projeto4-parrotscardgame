function iniciarJogo(){
    quantidadeCartas=prompt('Com quantas cartas você pretender jogar? Valores válidos: números pares entre 4 e 14');

    if(quantidadeCartas <4 || quantidadeCartas>14){
        alert("Favor inserir um numero  entre 4 e 14");
        iniciarJogo();
    }

    else if((quantidadeCartas%2)!== 0){
        alert("Favor inserir um numero par entre 4 e 14");
        iniciarJogo();
    }
}

iniciarJogo();