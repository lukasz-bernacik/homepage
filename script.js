const name = 'Łukasz';
const age = 31;

console.log ('Cześć, witaj na mojej stronie!');

console.log (`Mam na imię ${name} i mam ${age} lat`);



function hello(age, firstName) {
    console.log(`Hej mam na imię ${firstName} i mam ${age} lat`);
};

hello (31, 'Bercik');

function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}

createContent ('.welcome__subheading--js', `Hej! Mam na imię ${name} i mam ${age} lat`);