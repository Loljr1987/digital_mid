function tocaSom () {
    document.querySelector('#som_tecla').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// enquanto = while // para = for
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    listaDeTeclas[contador].onclick = tocaSomPom;

    contador =  contador + 1;

    console.log(contador);

 }