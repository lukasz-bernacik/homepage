const name = 'Łukasz';
const age = 31;

console.log ('Cześć, witaj na mojej stronie!');

console.log (`Mam na imię ${name} i mam ${age} lat`);

const subheading = document.querySelector('.about__subheading--js');

console.log(subheading);

subheading.innerHTML = `Mam na imię ${name} i mam ${age} lat`;
