let contatti = 'contatti.html';
let info = 'info.html';

function PrimaPagina(){
    console.log('PrimaPagina')
    fetch(contatti)
    .then(response => response.text())
    .then(dati => {
        console.log('text')
        document.getElementById('content').innerHTML = dati;
    })
    .catch(errore => console.log(errore));
}

function SecondaPagina(){
    console.log('SecondaPagina')
    fetch(info)
    .then(response => response.text())
    .then(dati => {
        document.getElementById('content').innerHTML = dati;
    })
    .catch(errore => console.log(errore));
}