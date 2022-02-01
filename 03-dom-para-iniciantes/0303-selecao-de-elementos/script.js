// Retorne no console todas as imagens do site
const allImages = document.querySelectorAll('img');
console.log(allImages);

// Retorne no console apenas as imagens que começaram com a palavra image
const imageOnly = document.querySelectorAll('img[src^="img/image"]');
console.log(imageOnly);

// Selecione todos os links internos (onde o href começa com #)
const internalLinks = document.querySelectorAll('[hrefˆ="#"]');
console.log(internalLinks);

// Selecione o primeiro h2 dentro de .animais-descricao
const animaisH2 = document.querySelector('.animais-descricao h2');
console.log(animaisH2);

// Selecione o último p do site
const lastP = document.querySelectorAll('p');
console.log(lastP[lastP.length-1].innerHTML);