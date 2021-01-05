var txt_numero1 = document.getElementById("numero1");
var txt_numero2 = document.getElementById("numero2");
var txt_resultado = document.getElementById("resultado");
var txt_tempo = document.getElementById("tempo");
var txt_acertos = document.getElementById("acertos");

var tempo = 0;

var numero1 = 0;
var numero2 = 0;
var acertos = 0;

function inicializa() {
  numero1 = Math.floor( (Math.random() * 10) + 1 );
  numero2 = Math.floor( (Math.random() * 10) + 1 );

  txt_numero1.value = numero1;
  txt_numero2.value = numero2;

  txt_resultado.focus();

  var i = 0;
  tempo = setInterval(function() {
    if (i === 10) {
      clearInterval(tempo);
      txt_resultado.value = "";
      txt_tempo.value = 0;
      txt_acertos.value = 0;

      alert("Game Over!   Total de acertos: " + acertos);
      location.reload();
    } else {
      txt_tempo.value = ++i;
    }
  }, 1000);
}

inicializa();

txt_resultado.oninput = function() {
  var resultado = parseInt(txt_resultado.value);

  if (resultado === numero1 * numero2) {
    txt_acertos.value = ++acertos;
    
    clearInterval(tempo);
    txt_tempo.value = 0;
    inicializa();
    
    txt_resultado.value = "";
  }
};
