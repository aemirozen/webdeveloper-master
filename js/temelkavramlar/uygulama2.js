let url = "https://www.sadikturan.com";
let kursAdi = "Komple Web Geliştirmeye Kursu";

// 1- url kaç karakterlidir ?

let sonuc;

sonuc = url.length;

// 2- kursAdi kaç kelimeden oluşmaktadır ? 
sonuc = kursAdi.split(" ").length;

// 3- url https ile mi başlıyor? 

sonuc = url.startsWith("https");

// 4- kursAdi içerisinde Eğitimi kelimesi var mı ? 

if (kursAdi.indexOf("Eğitimi"))
{
    console.log("evet var.");
} else {
    console.log("hayır yok.");
}

// 5- urel ve kursAdi değişkenlerini kullanarak string bilgiyi oluşturunuz.

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replaceAll(" ","-");
sonuc = `${url}/${kursAdi}`;
console.log(sonuc);

// https://www.sadikturan.com/komple-web-gelistirme-kursu 

console.log(sonuc);