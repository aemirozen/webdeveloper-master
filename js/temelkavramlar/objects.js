// dict, json

let user = {
    "name": "Sadık",
    "last": "Turan",
    "yas": 38,
    "adres": {
        "sehir": "kocaeli",
        "ilce": "izmit"
    },

    "hobiler": ["sinema","spor"]
}

let sonuc;

sonuc = user.name;
sonuc = user.yas;
sonuc = user.last;
sonuc = user.adres.sehir;
sonuc = user.adres.ilce;
sonuc = user.hobiler[0];
sonuc = user.hobiler[1];

let kullanicilar = [
    user,

]

console.log(sonuc);