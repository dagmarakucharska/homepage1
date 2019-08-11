console.log ('siema');
const name = 'Dagmara';
const age = 20;
let Dagmara = null;
console.log(name);
console.log(age);

console.log (`Nazywam się ${name} i mam ${age} lat`);

/* alert('Witam Cię na mojej stronie!');  */

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

/* Jak używać instrukcji if(35-37, 39-40), else(43-45), else if(41-42), switch(47-60) oraz &&(41), ||, zapis skrócony if(62-63*/
if ('JavaScript' != 'Java') {
    console.log('to prawda!');
}

if (age < 20) {
console.log('masz mniej niż 20 lat');
} else if ((age >= 20) && (age <= 30)) {
console.log('masz więcej niż 20 lat, ale mniej niż 30');
} else {
console.log('masz więcej niż 31 lat');
}

switch (age) {

    case 20:
        console.log('masz 20 lat');
    break;

    case 30:
        console.log('masz 30 lat');
    break;

    default:
        console.log(`masz ${age} lat`);
    break;
}

const amIOld = (age > 70) ? 'yes' : 'no';
console.log(amIOld);

/* Funkcja w JavaScrypcie, jak ją wywołać(72-76?*/
function calculate(x) {
    x = x + 3;
    console.log(`tradycyjnie: ${x}`);
    return x*7
}

calculate(1);

console.log(calculate(2));
const myCalculation = calculate(4);
console.log(myCalculation);

/* Fat arrow functions*/

const calculateFat = (x) => {
    x = x + 3;
    console.log(`fat: ${x}`);
    return x*7
}

console.log(calculateFat(2));

/* Skrócona forma fat arrow functions*/

const calculateFatCut = x => (x+3)*7;
console.log(calculateFatCut(2));