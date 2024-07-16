// Inicializa a lista de amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionar() {
  const nomeAmigoInput = document.getElementById('nome-amigo');
  const nomeAmigo = nomeAmigoInput.value.trim();
  if (nomeAmigo !== '') {
    amigos.push(nomeAmigo);
    nomeAmigoInput.value = '';
    atualizarListaAmigos();
  } else {
    alert('Por favor, digite um nome válido.');
  }
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
  const listaAmigos = document.getElementById('lista-amigos');
  listaAmigos.innerHTML = amigos.join('<br>');
}

// Função para realizar o sorteio dos amigos
function sortear() {
  if (amigos.length < 2) {
    alert('Você precisa de pelo menos 2 amigos para realizar o sorteio.');
    return;
  }

  // Faz uma cópia da lista de amigos para sortear
  let amigosRestantes = [...amigos];
  let resultadoSorteio = [];

  amigos.forEach(amigo => {
    let indiceSorteado;
    do {
      indiceSorteado = Math.floor(Math.random() * amigosRestantes.length);
    } while (amigosRestantes[indiceSorteado] === amigo);

    resultadoSorteio.push(`${amigo} tirou ${amigosRestantes[indiceSorteado]}`);
    amigosRestantes.splice(indiceSorteado, 1);
  });

  atualizarListaSorteio(resultadoSorteio);
}

// Função para atualizar o resultado do sorteio na tela
function atualizarListaSorteio(resultadoSorteio) {
  const listaSorteio = document.getElementById('lista-sorteio');
  listaSorteio.innerHTML = resultadoSorteio.join('<br>');
}

// Função para reiniciar o sorteio e a lista de amigos
function reiniciar() {
  amigos = [];
  atualizarListaAmigos();
  const listaSorteio = document.getElementById('lista-sorteio');
  listaSorteio.innerHTML = '';
}

// Adiciona event listeners para os botões
document.querySelector('.button.primary').addEventListener('click', adicionar);
document.querySelector('.button.secondary').addEventListener('click', sortear);
document.querySelector('.form__link').addEventListener('click', (event) => {
  event.preventDefault(); // Evita o comportamento padrão do link
  reiniciar();
});
