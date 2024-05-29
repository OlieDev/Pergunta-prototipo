
const telaPontos = document.getElementById('point');
let pontos = 0;
const telaTotal = document.getElementById('total');
const clickSound = document.getElementById('click-sound');
const themeSound = document.getElementById("theme-sound");
const cronometroElemento = document.getElementById('cronometrojs')

const media = document.getElementById('media');
const telaMedias = ['Ruim', 'Razoável','Ótimo', 'Excelente'];
const telaResultado = document.getElementById('resultado');
const tempoTotal = 120;
const tempoTotalSegundos = 121; 
let intervalo; // Variável global para armazenar o intervalo

// Função para formatar o tempo no formato MM:SS
function formatarTempo(tempo) {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;
  return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}

// Função para atualizar o cronômetro
function atualizarCronometro(tempoRestante) {
  cronometroElemento.textContent = formatarTempo(tempoRestante);
}

// Função para executar quando o cronômetro terminar
function onCronometroTerminado() {
  // Aqui você pode adicionar a ação que deseja executar
  for (let i = 1; i <= 10; i++) {
    document.getElementById('pergunta' + i).style.display = 'none';
  }
  document.getElementById('resultado').style.display = 'none';
  document.getElementById('tempoover').style.display = 'block';
  if (pontos <= 10 )  {
    media.textContent = telaMedias[0];
    playSounds(true, false, false);
    
   
}
else if (pontos == 50) {
    media.textContent = telaMedias[1];
    playSounds(false, true, false);
}else if (pontos === 70) {
    media.textContent = telaMedias[2];
    playSounds(false, false, true);
}else if (pontos === 100){
    media.textContent = telaMedias[3];
    playSounds(false, false, true);
}


}

// Função para parar o cronômetro
function pararCronometro() {
  clearInterval(intervalo);
}

// Função principal para iniciar o cronômetro
function iniciarCronometro() {
  let tempoRestante = tempoTotalSegundos;
  // Atualiza o cronômetro a cada segundo
  intervalo = setInterval(() => {
    tempoRestante--;
    atualizarCronometro(tempoRestante);
    // Verifica se o tempo restante é zero e para o intervalo
    if (tempoRestante === 0) {
      clearInterval(intervalo);
      onCronometroTerminado();
    }
  }, 1000);
}

// Inicializa o cronômetro quando a página carrega
window.onload = iniciarCronometro;




function playThemeSound(){
    themeSound.play()
}
function playSounds(fail, medium, win){
    const failSound = document.getElementById("fail-sound");
    const mediumSound = document.getElementById("medium-sound");
    const failWin = document.getElementById("win-sound");
    if (fail) {
        failSound.play();
    } else if (medium) {
        mediumSound.play();
    } else if (win) {
        failWin.play();
    }
}
document.addEventListener('DOMContentLoaded', () => {
    playThemeSound();
});






// Atualiza os pontos
function atualizarPontos() {
    telaPontos.innerText = pontos;
}

// Função para verificar a resposta e atualizar os pontos
function verificarResposta(inputId, respostaCorreta) {
    const resposta = document.getElementById(inputId);
    
    if (resposta.checked && resposta.value === respostaCorreta) {
        pontos += 10; 
       
         // Adiciona 10 pontos para cada resposta correta
    }
    
    
    atualizarPontos();  
    
    

}

function playClickSound() {
    clickSound.play()
}



document.getElementById('botao').addEventListener('click', () => {    
    
    verificarResposta('b', 'b');  // Verifica a resposta da primeira pergunta
    playClickSound();
    document.getElementById('pergunta1').style.display = 'none';
    document.getElementById('pergunta2').style.display = 'block';
});

document.getElementById('botao2').addEventListener('click', () => {
    playClickSound();
    verificarResposta('c1', 'c');  // Verifica a resposta da segunda pergunta
    document.getElementById('pergunta2').style.display = 'none';
    document.getElementById('pergunta3').style.display = 'block';
});

document.getElementById('botao3').addEventListener('click', () => {
    playClickSound();
    verificarResposta('c2', 'c');  // Verifica a resposta da terceira pergunta
    document.getElementById('pergunta3').style.display = 'none';
    document.getElementById('pergunta4').style.display = 'block';
});

document.getElementById('botao4').addEventListener('click', () => {
    playClickSound();
    verificarResposta('a3', 'a');  // Verifica a resposta da quarta pergunta
    document.getElementById('pergunta4').style.display = 'none';
    document.getElementById('pergunta5').style.display = 'block';
});

document.getElementById('botao5').addEventListener('click', () => {
    playClickSound();
    verificarResposta('e4', 'e');  // Verifica a resposta da quinta pergunta
    document.getElementById('pergunta5').style.display = 'none';
    document.getElementById('pergunta6').style.display = 'block';
});

document.getElementById('botao6').addEventListener('click', () => {
    playClickSound();
    verificarResposta('b5', 'b');  // Verifica a resposta da sexta pergunta
    document.getElementById('pergunta6').style.display = 'none';
    document.getElementById('pergunta7').style.display = 'block';
});
document.getElementById('botao7').addEventListener('click', () => {
    playClickSound();
    verificarResposta('b6', 'b');  // Verifica a resposta da sexta pergunta
    document.getElementById('pergunta7').style.display = 'none';
    document.getElementById('pergunta8').style.display = 'block';
});
document.getElementById('botao8').addEventListener('click', () => {
    playClickSound();
    verificarResposta('c7', 'c');  // Verifica a resposta da sexta pergunta
    document.getElementById('pergunta8').style.display = 'none';
    document.getElementById('pergunta9').style.display = 'block';
});
document.getElementById('botao9').addEventListener('click', () => {
    playClickSound();
    verificarResposta('d8', 'd');  // Verifica a resposta da sexta pergunta
    document.getElementById('pergunta9').style.display = 'none';
    document.getElementById('pergunta10').style.display = 'block';
});
document.getElementById('botao10').addEventListener('click', () => {
    playClickSound();
    verificarResposta('a9', 'a');  // Verifica a resposta da sexta pergunta
    document.getElementById('pergunta10').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    cronometroElemento.style.display = 'none';
    pararCronometro()
   


    if (pontos <= 10 )  {
        media.textContent = telaMedias[0];
        playSounds(true, false, false);
        
       
    }
    else if (pontos == 50) {
        media.textContent = telaMedias[1];
        playSounds(false, true, false);
    }else if (pontos === 70) {
        media.textContent = telaMedias[2];
        playSounds(false, false, true);
    }else if (pontos === 100){
        media.textContent = telaMedias[3];
        playSounds(false, false, true);
    }


   
});



