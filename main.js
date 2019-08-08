console.log ('siema');
const name = 'Dagmara';
const age = 27;
console.log(name);
console.log(age);

console.log (`Nazywam się ${name} i mam ${age} lat`);

alert('Witam Cię na mojej stronie!');

/*Jak dostać się w DOM-ie do elementu w HTML-u*/
const about = document.querySelector('.about')

console.log(about);

/*Jak dostać się w DOM-ie do podobnych elementów. Jest to inaczej NodeList - lista elementów porównywalna do tablicy.*/

const plant = document.querySelectorAll('p');

console.log(plant);

/*Jak dostać się do konkretnego paragrafu z wczytanej NodeList-y? Dobrą praktyką jest nanoszenie w HTML-u selektorów dotyczących JavaScriptu*/
console.log(plant[0]);

/* Zmiana treści w HTML-u za pomocą inner.html w JavaScripcie. 1.Inner.html dobiera się do zawartości danego paragrafu, nie jak document.querySelector('.paragraph') do nazwy paragrafu i jego zawartości 2. Aby zamienić zawartość danego paragrafu z tym co rzeczywiście znajduje się w HMTL-u należy - spójrz na 3 linijkę skryptu poniżej. */

const paragraph = document.querySelector('.about__paragraph--js')

console.log(paragraph.innerHTML)

paragraph.innerHTML = 'I tak zamienia się tekst w JavaScripcie!';