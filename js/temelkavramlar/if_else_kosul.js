// yas >= 18 
// mezuniyet == "lise" ya da "üniversite"

let mezuniyet = "üniversite";
let yas = 20;

if ((yas >= 18) && (mezuniyet == "lise" || mezuniyet == "üniversite"))
{
    console.log("Ehliyet alabilir");
} else {
    console.log("Ehliyet Şartları Uymuyor");
}

// and
// true, true => true
// true, false => false

// or 
// true, true = true
// true, false = true