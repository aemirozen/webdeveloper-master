let sonuc; 

sonuc = 10;
sonuc = "10";

sonuc = Number("10");
sonuc = parseInt("10.6");
sonuc = parseFloat("10.6");
sonuc = parseInt("10a");

sonuc = isNaN("10a"); // not a number -> sayısal bir değer değil mi ? 

let sayi = 15.23123123;

sonuc = sayi.toPrecision(5); // yazılan değer kadar basamak döndürür.
sonuc = sayi.toFixed(5); // ondalıklı kısımda yazılan değer kadar gösterir.

sonuc = Math.round(2.4); // en yakın sayıya yıuvarlamaya yarar.
sonuc = Math.ceil(2.2); // yukarıya yuvarlar. 
sonuc = Math.floor(2.2); // aşağıya yuvarlar.
sonuc = Math.sqrt(25); // karakökünü alır.
sonuc = Math.pow(2,3); // üslü işlem yapar. 2*2*2 
sonuc = Math.random(); // rastgele bir sayı üretir.
 


console.log(typeof sonuc);
console.log(sonuc);