
// Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío"
""
const ciudadesDeBrasil=["Santos","Ouro","Preto","Manaos","Curitiba","Recife","Brasília","Foz do Iguaçu","Salvador","San Pablo","Rio de Janeiro"];

function asignartextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;

}

asignartextoElemento("h1","Hora del Desafío");
asignartextoElemento("p","Desafío: hora de practicar 1");

// Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".

function BotonConsole() {
   console.log("El botón fue clicado");
   return;
}
// Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil.
// Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
// let listaCiudadesBrasil = [Santos,Ouro,Preto,Manaos,Curitiba,Recife,Brasília,Foz do Iguaçu,Salvador,San Pablo,Rio de Janeiro];

function BotonPrompt(){
    const ciudad = prompt("Ingresa el nombre de una de las 10 ciudades Favoritas de Brasil:");
    if (ciudad) {
        if (ciudadesDeBrasil.includes(ciudad)) {
          alert(`Estuve en ${ciudad} y me acordé de ti.`);
        } else {
          alert(`No es una de las 10 ciudades favoritas de Brasil: ${ciudad}, pero gracias por compartirlo.`);
        }
      } else {
        alert("No ingresaste ninguna ciudad. ¡Inténtalo de nuevo!");
      }
    }

// Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".

function BotonAlert(){
   
    alert("Yo amo JS");
   
}
// Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function SumaDos(){
    let PrimerNumero= parseInt(prompt("Numero"));
    let SegundoNumero= parseInt(prompt("Numero"));
    let Resultado= PrimerNumero + SegundoNumero;
    alert("Resultado = " + Resultado);
}
