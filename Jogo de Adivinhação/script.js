const numeroSecreto = parseInt(Math.random * 1001);

while (chute != numeroSecreto) {
  let chute = prompt('Digite um número entre 1 e 1000: ');
  if (chute == numeroSecreto) {
    alert('Acertou');
  } else if (chute > numeroSecreto) {
    alert('Errou... o número é menor');
  } else {
    alert('Errou... o número é maior');
  }
}
