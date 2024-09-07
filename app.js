function checar(respostaSelecionada) {
  // Verifica se a resposta do usuário está correta e exibe a explicação ou uma mensagem de parabéns.
  const strrespostaCorreta = localStorage.getItem("resposta");
  const respostaCorreta = parseInt(strrespostaCorreta);
  const elementoExplicacao = document.getElementById("explicacao");

  if (respostaSelecionada === respostaCorreta) {
    elementoExplicacao.textContent = "Parabéns! Você acertou!";
  } else {
    elementoExplicacao.textContent = localStorage.getItem("explicacao");
  }
}

function exibirExercicio() {
  // Exibe um exercício aleatório do tema selecionado, armazenando as informações necessárias no localStorage.
  const tema = localStorage.getItem('tema');
  // Obtém um número aleatório entre 0 e o último índice do array
  const indiceAleatorio = Math.floor(Math.random() * 7);
  localStorage.setItem('indice', indiceAleatorio);

  // Obtém as referências para os elementos HTML onde o exercício será exibido
  const elementoEnunciado = document.getElementById("enunciado");
  const elementoAlt1 = document.getElementById("alternativa0");
  const elementoAlt2 = document.getElementById("alternativa1");
  const elementoAlt3 = document.getElementById("alternativa2");
  const elementoAlt4 = document.getElementById("alternativa3");

  // Atribui o enunciado do exercício sorteado ao elemento HTML, bem como suas alternativas
  elementoEnunciado.textContent = bancoDeQuestoes[tema][indiceAleatorio].enunciado;
  elementoAlt1.textContent = bancoDeQuestoes[tema][indiceAleatorio].alternativas[0];
  elementoAlt2.textContent = bancoDeQuestoes[tema][indiceAleatorio].alternativas[1];
  elementoAlt3.textContent = bancoDeQuestoes[tema][indiceAleatorio].alternativas[2];
  elementoAlt4.textContent = bancoDeQuestoes[tema][indiceAleatorio].alternativas[3];

  // Salva a explicação e a resposta para serem usadas quando checar()
  localStorage.setItem('explicacao', bancoDeQuestoes[tema][indiceAleatorio].explicacao);
  localStorage.setItem('resposta', bancoDeQuestoes[tema][indiceAleatorio].resposta);
}

function inicio() {
  // Redireciona o usuário para a página inicial (index.html).
  location.href = "index.html";
}

function praticar(tema) {
  // Inicia a prática de um determinado tema, armazenando o tema no localStorage e redirecionando para a página de exercícios.
  if (['equacoes', 'media', 'potencias', 'probabilidade', 'regradetres', 'transformacoes'].includes(tema)) {
    localStorage.setItem('tema', tema);
      window.location.href = 'exercicios.html';
  } else {
    // Exibe uma mensagem de erro caso o tema não seja válido.
    alert("Por favor, escolha um tema disponível.")
  }
}

function reload() {
  // Recarrega a página atual.
  location.reload();
}