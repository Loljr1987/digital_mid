function tocaSom () {
    document.querySelector('#som_tecla').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

// enquanto = while
while (contador < listaDeTeclas.length) {

    listaDeTeclas[contador].onclick = tocaSomPom;

    contador =  contador + 1;

    console.log(contador);

 }