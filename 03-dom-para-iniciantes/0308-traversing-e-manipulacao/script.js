// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const menuClone = menu.cloneNode(true);

copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq
const dl = document.querySelector('dl');
const primeiroDt = dl.querySelector('dt');

// Selecione o DD referente ao primeiro DT
const dd = primeiroDt.nextElementSibling;
console.log(dd.innerHTML);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;
