//-----------------------------------------------------------------
// 1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.
// let sayi = 40;

// if(sayi > 10 && sayi < 50)
// {
//     console.log("Sayı 10-50 arasındadır.");
// } else {
//     console.log("Sayı 10-50 arasında değildir.");
// }
//-----------------------------------------------------------------

//-----------------------------------------------------------------
// 2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.

// let sayi = 20;

// if(sayi % 2 == 1 || sayi > 0) 
// {
//     console.log("Sayı pozitif tek sayıdır.");
// }
//-----------------------------------------------------------------

//-----------------------------------------------------------------
// 3- x, y, z sayılarının büyüklük karşılaştırması yapınız.

// let x = 20, y = 20, z = 20;

// if(x > y && x > z) 
// {
//     console.log("X en büyük.");
// } else if(y > x && y > z)
// {

//  console.log("Y en büyük.");
// } else if (z > x && z > y) 
// {
//     console.log("Z en büyük.");
// } else 
// {
//     console.log("Sayılar eşit.");
// }
//-----------------------------------------------------------------

//-----------------------------------------------------------------
// 4- 2 vize ve 1 final notuna göre hesaplanan ortalama için;
let vize1 = 20;
let vize2 = 20;
let final = 69;

let ortalama = (((vize1 + vize2) / 2) * 0.4) + final * 0.6;

console.log("ortalamanız: " + ortalama);
// a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.

// if(ortalama >= 50) 
// {
//     console.log("Geçtiniz");
// } else {
//     console.log("Kaldınız");
// }

// b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.

//if(ortalama >= 50) 
// {
//     console.log("Geçtiniz");
// } else {
//     console.log("Kaldınız");
// }

// c- Finalden 70 alındığında ortalama 50'nin altında olsa bile dersten geçsin.

if(ortalama >= 50 || final >= 50) 
{
   console.log("Geçtiniz");
} else {
    console.log("Kaldınız");
}