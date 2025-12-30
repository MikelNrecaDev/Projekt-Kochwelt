//function for contact.html
// sendMail()
function sendMail(event){﻿
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/xgoezozq", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "./send_mail.html";
    }).catch((error) => {
        console.log(error);
    });
}

document.querySelector('form').addEventListener('submit', sendMail);


///Rezept Seite


// Basis-Menge für 1 Portion
const basisMenge = {
    eigelb: 0.25,
    senf: 0.25,
    zitronensaft: 0.63,
    worcestershire: 0.25,
    sonnenblumenoel: 1.25,
    salzoben: 0.13,
    pfeffer: 1,
    toast: 1,
    speck: 3,
    haenchen: 100,
    salzunten: 0.5,
    lattich: 0.5,
    gurke: 50,
    sbrinz: 53
};

//Schritt 1: Funktionsname frei definieren zum Festlegen des Funktionsinhaltes
function berechnePortionen() {
console.log

//Schritt 2: Anzahl der Portionen aus dem Input-Feld holen
const portionen = parseFloat(document.getElementById('portionenInput').value) || 1;

///Rechnung erstellen
document.getElementById('eigelb').textContent = (basisMenge.eigelb * portionen);
document.getElementById('senf').textContent = (basisMenge.senf * portionen);
document.getElementById('zitronensaft').textContent = (basisMenge.zitronensaft * portionen).toFixed(1);
document.getElementById('worcestershire').textContent = (basisMenge.worcestershire * portionen);
document.getElementById('sonnenblumenoel').textContent = (basisMenge.sonnenblumenoel * portionen);
document.getElementById('salzoben').textContent = (basisMenge.salzoben * portionen);
document.getElementById('pfeffer').textContent = (basisMenge.pfeffer * portionen);
document.getElementById('toast').textContent = (basisMenge.toast * portionen);
document.getElementById('speck').textContent = (basisMenge.speck * portionen);
document.getElementById('haenchen').textContent = (basisMenge.haenchen * portionen);
document.getElementById('salzunten').textContent = (basisMenge.salzunten * portionen).toFixed(1);
document.getElementById('lattich').textContent = (basisMenge.lattich * portionen);
document.getElementById('gurke').textContent = (basisMenge.gurke * portionen);
document.getElementById('sbrinz').textContent = (basisMenge.sbrinz * portionen);

}
//Schritt 3: Event Listener für den Button  --> Button reagiert auf den klick und rechnet die funktion *berechnePortionen* aus (Schritt 1)
                        //portionenButton muss als Id innerhalb des button tags stehen// 
document.getElementById('portionenButton').addEventListener('click', berechnePortionen);

