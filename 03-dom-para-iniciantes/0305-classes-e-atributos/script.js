// Adicione a classe ativo a todos os itens do menu
const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach((item) => {
  item.classList.add('ativo')
});
console.log(menuItems);

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItems.forEach((item) => {
  item.classList.remove('ativo')
});
console.log(menuItems);

menuItems[0].classList.add('ativo');
console.log(menuItems);

// Verifique se as imagens possuem o atributo alt
const possuemAlt = document.querySelector('img');
const verificar = possuemAlt.hasAttributes();
console.log(verificar);

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="https"]');
console.log(link.href);

link.setAttribute('href', 'https://www.google.com/');
console.log(link.href);