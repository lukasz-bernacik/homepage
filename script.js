const name = 'Łukasz';
const age = 31;

console.log ('Cześć, witaj na mojej stronie!');

console.log (`Mam na imię ${name} i mam ${age} lat`);

const subheading = document.querySelector('.welcome__subheading--js');

console.log(subheading);

subheading.innerHTML = `Hej! Mam na imię ${name} i mam ${age} lat`;
