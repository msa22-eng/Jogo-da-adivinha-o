function jogar() {
  // Gera número aleatório entre 1 e 50
  const numeroSecreto = Math.floor(Math.random() * 50) + 1;
  let palpite;
  let tentativas = 0;

  // Laço continua até acertar
  do {
    palpite = parseInt(prompt("Digite seu palpite (entre 1 e 50):"), 10);
    tentativas++;

    if (palpite > numeroSecreto) {
      alert("O número secreto é menor!");
    } else if (palpite < numeroSecreto) {
      alert("O número secreto é maior!");
    } else if (palpite === numeroSecreto) {
      alert("🎉 Parabéns! Você acertou o número secreto: " + numeroSecreto +
            "\nTentativas: " + tentativas);
    } else {
      alert("Por favor, digite um número válido.");
    }
  } while (palpite !== numeroSecreto);
}
