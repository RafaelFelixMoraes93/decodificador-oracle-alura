let imagem = document.querySelector('img[src="assets/High quality products 1 1.png"]');

function iniciar() {
    let inicioh = document.querySelector('h1');
    inicioh.innerHTML = "Nenhuma mensagem encontrada";
    let iniciop = document.querySelector('p');
    iniciop.innerHTML = "Digite um texto que você deseja criptografar ou descriptografar.";
}

function criptografar() {
    imagem.style.visibility = "hidden";
    let iniciop = document.querySelector('h1');
    iniciop.innerHTML = "";
    let areaDeTexto = document.querySelector('.areaDeTexto');
    let mensagem = areaDeTexto.value;
    let mensagemCriptografada = mensagem.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    let pElement = document.querySelector('.ladoDireito__mensagens p');
    pElement.innerHTML = mensagemCriptografada;       
}

function descriptografar() {
    imagem.style.visibility = "hidden";
    let iniciop = document.querySelector('h1');
    iniciop.innerHTML = "";
    let areaDeTexto = document.querySelector('.areaDeTexto');
    let mensagemCriptografada = areaDeTexto.value;
    let mensagemDescriptografada = mensagemCriptografada.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    let pElement = document.querySelector('.ladoDireito__mensagens p');
    pElement.innerHTML = mensagemDescriptografada;       
}

iniciar();