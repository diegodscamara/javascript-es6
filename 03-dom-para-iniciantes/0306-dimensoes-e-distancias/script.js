// Verifique a distância da primeira imagem
// em relação ao topo da página
const imagem = document.querySelector('img');
console.log(imagem.offsetTop);

// Retorne a soma da largura de todas as imagens

function somaImagens() {
  const imagens = document.querySelectorAll('img');
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach(() => {
  const linksWidth = links.getBoundingClientRect().width;

  if (linksWidth >= 48) {
    console.log(linksWidth, 'Acessivel');
  } else {
    console.log(linksWidth, 'Não acessivel');
  }
});


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const smallBrowser = window.matchMedia('(max-width: 720px)').matches;

const menu = document.querySelector('.menu');

if (smallBrowser) {
  menu.classList.add('menu-mobile')
};