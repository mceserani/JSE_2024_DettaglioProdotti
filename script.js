let prodotti = [];

function showProducts(){
    let list = document.getElementById("product-list");
    list.innerHTML = "";
    for(let i=0; i<prodotti.length; i++){
        let p = prodotti[i];
        let li = document.createElement("li");
        li.innerHTML = p.nome + " - " + p.descrizione + " - " + p.prezzo;
        list.appendChild(li);
    }
}

function addProduct(){
    let codice = prompt("Inserisci il codice del prodotto:");
    let nome = prompt("Inserisci il nome del prodotto:");
    let descrizione = prompt("Inserisci la descrizione del prodotto:");
    let prezzo = prompt("Inserisci il prezzo del prodotto:");
    let p = {
        "codice": codice,
        "nome": nome,
        "descrizione": descrizione,
        "prezzo": prezzo
    };
    prodotti.push(p);
    showProducts();
}

function deleteProduct(){
    let codice = prompt("Inserisci il codice del prodotto da eliminare:");
    for(let p of prodotti){
        if(p.codice == codice){
            prodotti.splice(prodotti.indexOf(p), 1);
            break;
        }
    }
    showProducts();
}

function sortProducts(){
    prodotti.sort(function(a, b){
        if (a.nome < b.nome) {
            return -1;
        }
        if (a.nome > b.nome) {
            return 1;
        }
        return 0;
    });
    showProducts();
}