let simdi = new Date(); // şimdiki tarih - saat


// Get Methods
sonuc = simdi;
sonuc = simdi.getDate(); // sadece tarihi söyler.
sonuc = simdi.getDay(); // hangi gün olduğunu söyler.
sonuc = simdi.getFullYear(); // yıl bilgisi.
sonuc = simdi.getHours(); // saati söyler.
sonuc = simdi.getTime(); // şu anki saati milisaniye cinsinden veriyor.

// Set Methods

simdi.setFullYear(2025);
simdi.setMonth(7); // 0: Ocak
simdi.setDate(4); // gün değiştirir.



sonuc = simdi;

let dogumTarihi = new Date(1990, 5, 15);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();


let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000;
let dakika = saniye / 60;


sonuc = dakika;

console.log(sonuc);
console.log(typeof sonuc);