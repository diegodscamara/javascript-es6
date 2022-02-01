// Retorne o url da página atual utilizando o objeto window
const urlDaPagina = window.location.href;
console.log(`A URL da página é: ${urlDaPagina}`);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.ativo');
console.log(elementoAtivo.innerText);

// Retorne a linguagem do navegador
const browserLanguage = window.navigator.language;
console.log(`A línguagem do navegador é: ${browserLanguage}`);

// Retorne a largura da janela 
const larguraDaTela = window.outerWidth;
console.log(`A largura da tela é: ${larguraDaTela}px`);