let listaNumerosSorteados = [];
let numeroLimimte = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1; 

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female",{rate:1.2});
}

function msgInicial(){
    exibirTexto("h1","Jogo do número secreto");
    exibirTexto("p", "Escolha um número entre 1 a 10");
}

msgInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;
    
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas!' : "tentativa!";
        exibirTexto("h1","Você Acertou!");
        exibirTexto("p","Você descobriu o número secreto com "+tentativas+" "+palavraTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(chute > numeroSecreto){
            exibirTexto("p", "O número secreto é menor");
        } else{
            exibirTexto("p","O número secreto é maior");
        }
        tentativas++;
        limparCampo();
    } 
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*numeroLimimte+1);
    let qtdElementosLista = listaNumerosSorteados.length;

    if(qtdElementosLista == numeroLimimte){
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else {
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    msgInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}