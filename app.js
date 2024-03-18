function encriptar(){
    let texto = document.getElementById("text-area").value;
    let tituloMensaje = document.getElementById("mensaje_1");
    let parrafo = document.getElementById("parrafo");

    let textocifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
   
   
    if (texto.length != 0){
        document.getElementById("text-area").value = textocifrado;
        document.getElementById("mensaje_1").textContent="Texto encriptado con éxito";
        document.getElementById("parrafo").textContent = "";
    } else{
        tituloMensaje.textContent ="Ningun Mensaje fue encontrado";
        parrafo.textContent= "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes Ingresar algún texto");
    }
}

function desencriptar(){
    let texto = document.getElementById("text-area").value;
    let tituloMensaje =  document.getElementById("mensaje_1");
    let parrafo = document.getElementById("parrafo");

    
    let textocifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
        
        if (texto.length != 0){
            document.getElementById("text-area").value = textocifrado;
            document.getElementById("mensaje_1").textContent="Texto desencriptado con éxito";
            document.getElementById("parrafo").textContent = "";}
            else{
                tituloMensaje.textContent ="Ningun Mensaje fue encontrado";
                parrafo.textContent= "Ingresa el texto que deseas encriptar o desencriptar";
                alert("Debes Ingresar algún texto");
            }

    }
