// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"]');

function callback(event) {
  event.preventDefault();
  this.classList.toggle('ativo');
}

linksInternos.forEach((event) => {
  event.addEventListener('click', callback);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll('body *');

function selecionaElementos(event) {
  const target = event.target;
  target.remove();
}

todosElementos.forEach((event) => {
  event.addEventListener('click', selecionaElementos)
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

const selecionaHTML = document.querySelectorAll('*')

function aumentarTexto(event) {
  if (event.key === 't')
  document.body.classList.add('textomaior');
}

window.addEventListener('keydown', aumentarTexto);