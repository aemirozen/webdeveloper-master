// OOP: Nesne Tabanlı Programlama
// Object

// let soru = {
//     soruMetni: "Hangisi javascript paket yönetim uygulamasidir?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "Typescript",
//         c: "Npm"
//     },
//     dogruCevap: "c", 
//     cevabiKonrtolEt: function(cevap) {
//         return cevap === this.dogruCevap 
//     }
// }

// let soru2 = {
//     soruMetni: "Hangisi javascript paket yönetim uygulamasidir?",
//     cevapSecenekleri: {
//         a: "Node.js",
//         b: "nuget",
//         c: "Npm"
//     },
//     dogruCevap: "b", 
//     cevabiKonrtolEt: function(cevap) {
//         return cevap === this.dogruCevap 
//     }
// }

 

// sınıf, Constructor => nesne * 30
// ES5, ES6, ES7


function Soru(soruMetni,cevapSecenekleri,dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
   

    console.log(this);
}

Soru.cevabiKonrtolEt = function(cevap) {
    return cevap === this.dogruCevap
} 

let soru1 = new Soru("Hangisi javascript paket yönetim uygulamasidir?", { a: "Node.js", b: "Typescript",c: "Npm"}, "c");
let soru2 = new Soru("Hangisi .net paket yönetim uygulamasidir?", { a: "Node.js", b: "nuget",c: "Npm"}, "b");


let sorular = [
    new Soru("Hangisi javascript paket yönetim uygulamasidir?", { a: "Node.js", b: "Typescript",c: "Npm"}, "c"),
    new Soru("Hangisi javascript paket yönetim uygulamasidir?", { a: "Node.js", b: "Typescript",c: "Npm"}, "c"),
    new Soru("Hangisi javascript paket yönetim uygulamasidir?", { a: "Node.js", b: "Typescript",c: "Npm"}, "c"),
    new Soru("Hangisi javascript paket yönetim uygulamasidir?", { a: "Node.js", b: "Typescript",c: "Npm"}, "c")

]

console.log(soru1.cevabiKonrtolEt("c"));
  