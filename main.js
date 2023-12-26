function tocaSom (idElemnetoAudio) {
    document.querySelector(idElemnetoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// enquanto = while // para = for
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento =  tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
   
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

 }
 