// OOP: Nesne Tabanlı Programlama
// Object

let soru = {
    soruMetni: "Hangisi javascript paket yönetim uygulamasidir?",
    cevapSecenekleri: {
        a: "Node.js",
        b: "Typescript",
        c: "Npm"
    },
    dogruCevap: "c", 
    cevabiKonrtolEt: function(cevap) {
        return cevap === this.dogruCevap 
    }
}

let soru2 = {
    soruMetni: "Hangisi javascript paket yönetim uygulamasidir?",
    cevapSecenekleri: {
        a: "Node.js",
        b: "nuget",
        c: "Npm"
    },
    dogruCevap: "b", 
    cevabiKonrtolEt: function(cevap) {
        return cevap === this.dogruCevap 
    }
}

 

console.log(soru.soruMetni);
console.log(soru.cevabiKonrtolEt("c"));
console.log(soru2.cevabiKonrtolEt("b"));

// sınıf, Constructor => nesne * 30
// ES5, ES6, ES7