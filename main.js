console.log ('siema');
const name = 'Dagmara';
const age = 27;
console.log(name);
console.log(age);

console.log (`Nazywam się ${name} i mam ${age} lat`);

alert('Witam Cię na mojej stronie!');

const about = document.querySelector('.about__paragraph--js');

console.log(about.innerHTML);

about.innerHTML = 'Pozdrawiam'

const paragraph = document.querySelectorAll('p');

console.log(paragraph);
console.log(paragraph[1]);