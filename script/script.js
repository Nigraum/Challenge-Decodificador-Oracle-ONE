var btn_criptografar = document.querySelector(".botao-crip");
var btn_descriptografar = document.querySelector(".botao-descrip");
var btn_copiar = document.querySelector(".botao-copiar");
var msg_sem_result = document.querySelector(".esconder1");
var msg_result = document.querySelector(".esconder2");
var area = document.getElementById("area");
var resultado = document.getElementById("area-result");

function objetoVazio(){
    if(area.value == ""){
        return true;
    } else {
        return false;
    }
}  

function checar(){
    if(objetoVazio()){
        alert("Preencha o campo de texto que será Criptografado/Descriptografado");
    } else {
        msg_sem_result.style.display = 'none';
        msg_result.style.display = 'flex';
    }
}

function criptografar(){
    checar();

    let i = area.value.toLowerCase();

    var tratado = i.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    return resultado.innerHTML = tratado;
}

function descriptografar(){
    checar();

    let i = area.value.toLowerCase();

    var tratado = i.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    return resultado.innerHTML = tratado;

}

function copiar() {
    navigator.clipboard.writeText(resultado.innerHTML).then(()=> {
        alert("Mensagem copiada")
        area.value = null
        btn_copiar.innerHTML = "Copiado"
        btn_copiar.disable = true
    })
    .catch(()=> {alert("Erro");
    });
}

btn_criptografar.onclick = criptografar;
btn_descriptografar.onclick = descriptografar;
btn_copiar.onclick = copiar;