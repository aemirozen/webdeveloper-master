let ogrenciler= ["çınar", "yiğit", "ada"];

sonuc = ogrenciler.length;

// array to string

sonuc = ogrenciler.toString(); // verilen değerleri birleştirir.
sonuc = ogrenciler.join("-"); // içerisine koyduğumuz ifadeyi stringlerin arasına yerleştirir.

// eleman silme
sonuc = ogrenciler.pop(); // son eleman silinir ve silinen eleman geri döndürülür.
sonuc = ogrenciler.shift(); // ilk eleman silinir ve silinen eleman geri döndürülür.

// eleman ekleme
// sonuc = ogrenciler.push("sena"); // dizinin sonuna eleman eklenir.
// sonuc = ogrenciler.unshift("sena"); // dizinin başına eleman ekler.
 
let markalar1 = ["mazda", "toyota"];
let markalar2 = ["opel", "renault"];
let markalar3 = ["mercedes"];

// sonuc = markalar1.concat(markalar2,markalar3); // dizileri birbirine bağlar. 

sonuc = markalar1.splice(0, 1, "bmw", "audi"); // siler veya ekler

console.log(sonuc);
console.log(markalar1);