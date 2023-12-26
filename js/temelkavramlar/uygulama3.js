// "Elma, armut, muz, çilek" elemanlarına sahip bir dizi oluşturunuz.

let meyve = ["Elma","Armut","Muz","Çilek"];

// Dizi kaç elemanlıdır?

sonuc = meyve.length; // Benim yaptığım 
console.log(meyve.length); // Hocanın yaptığı

// Dizinin ilk ve son elemanı nedir?

console.log(meyve[0]);
console.log(meyve[3]); // Benim yaptığım.
console.log(meyve[meyve.length - 1]);// Hocanın yaptığı.

// Elma dizinin bir elemanı mıdır?

console.log(meyve.includes("Elma"));

// Kiraz meyvesini listenin sonuna ekleyiniz.

sonuc = meyve.push("kiraz");

// Dizinin son 2 elamanını siliniz.

sonuc = meyve.splice(3,4); 

// Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.

let ogr1 = [
    "yiğit",
    "Bilgi",
    2010,
    [70,60,80]
];

let ogr2 = [
    "Ada",
    "Bilgi",
    2012,
    [80,80,90]
];

let ogr3 = [
    "Ahmet",
    "Turan",
    2009,
    [60,60,70]
];

let ogrenciler = [ogr1, ogr2, ogr3];

let yigit_yas = new Date().getFullYear() - ogrenciler[0][2];
let ada_yas = new Date().getFullYear() - ogrenciler[1][2];
let ahmet_yas = new Date().getFullYear() - ogrenciler[2][2];

let yigit_not = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let ada_not = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
let ahmet_not = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;



console.log(yigit_yas, ada_yas, ahmet_yas);