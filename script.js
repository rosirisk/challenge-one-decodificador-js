const input_text = document.querySelector("#text-input");
const input_mensagem = document.querySelector("#div-mensagem");

const btn_criptografar = document.querySelector("#btn-criptografar");
const btn_descriptografar = document.querySelector("#btn-descriptografar");
const btn_copiar = document.querySelector("#btn-copiar");

btn_criptografar.addEventListener("click", function() {
    var resultado = criptografar(input_text.value);
    input_mensagem.value = resultado;
}, false);

btn_descriptografar.addEventListener("click", function() {
    var resultado = descriptografar(input_text.value);
    input_mensagem.value = resultado;
}, false);

btn_copiar.addEventListener("click", function() {
    copiar();
    
}, false);

function copiar(){
    let text = input_mensagem.value;
    navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
}
    


function criptografar(string) {
    const resultado = string
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
    
    return resultado;
}

function descriptografar(string) {
    const resultado = string
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
    
    return resultado;
}

