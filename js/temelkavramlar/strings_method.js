let kursAdi = "Komple uygulamalı Web Geliştirme Eğitimi";

let sonuc;

sonuc = kursAdi.toLowerCase(); // Bütün harfleri küçük yapar.
sonuc = kursAdi.toUpperCase(); // Bütün harfleri büyük yapar.
sonuc = kursAdi.length; // Kaç karakter olduğunu hesaplar ve gösterir.
sonuc = kursAdi[1]; // index sayısında ki harfi veya rakamı yazdırır.
sonuc = kursAdi.slice(0, 6); // Belli aralaıklarda ki rakam ve harfleri ekrana yansıtır.
sonuc = kursAdi.slice(10);
sonuc = kursAdi.slice(-10);

sonuc = kursAdi.substring(0, 6); // İndexle aynı işlmei yapar.

sonuc = kursAdi.replace("Eğitimi", "Kursu"); // Kelimeleri değiştirir.
sonuc = kursAdi.trim(); // boşluk karakterlerini siler.


console.log(sonuc);
