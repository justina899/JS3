console.log("1 uzd - LENGVESNES");
for (let i = 0; i < 10; i++) {
    console.log("Labas");
}
//---------------------------------
console.log("2 uzd");
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//---------------------------------
console.log("3 uzd");
let augaluMas = ["orchideja", "roze", "saulegraza", "lelija", "aviete", "slyva", "zole", "morka", "papartis", "obelis"];
//---------------------------------
console.log("4 uzd");
for (let i = 0; i < 10; i++) {
    console.log(augaluMas[i]);
}
//---------------------------------
console.log("5 uzd");
for (let i = 9; i >= 0; i--) {
    console.log(augaluMas[i]);
}
//--------------------------------
console.log("6 uzd");
for (let i = 5; i < 26; i++) {
    console.log(2 * i);
}
//--------------------------------
console.log("7 uzd");
for (let i = 5; i < 26; i++) {
    let num = 2 * i;
    if (num % 10 == 0) {
        console.log(num);
    }
}
//---------------------------------
console.log("8 uzd");
var x = 0;
for (let i = 0; i < 21; i++) {
    if (i % 2 == 0 && i > 0) {
        x++;
    }
}
console.log("kintamasis i turėjo porinę reikšmę " + x + " kartų");
//----------------------------------
console.log("9 uzd");
var trumpesnisNei5 = 0;
var ilgesnisNei7 = 0;
for (let i = 0; i < augaluMas.length; i++) {
    if (augaluMas[i].length < 5) {
        trumpesnisNei5++;
    } else {
        if (augaluMas[i].length > 7) {
            ilgesnisNei7++;
        } else { }
    }
}
console.log(trumpesnisNei5 + " zodziai trumpesni nei 5 simboliai");
console.log(ilgesnisNei7 + " zodziai ilgesni nei 7 simboliai");
//-------------------------------------
console.log("1 uzd - SUNKESNI");
var mas = [];
var str = "";
var didesnisNei150 = 0;
for (let i = 0; i < 301; i++) {
    mas[i] = Math.round(Math.random() * 300);
    if (mas[i] > 275) {
        str = str + "[" + mas[i] + "]" + " ";
    } else {
        str = str + mas[i] + " ";
    }
    if (mas[i] > 150) {
        didesnisNei150++;
    }
}
console.log(str);
console.log(didesnisNei150 + " didesnių už 150");
//-----------------------------------------
console.log("2 uzd");
var mas1 = [];
var str1 = "";
for (let i = 0; i < 3000; i++) {
    mas1[i] = i + 1;
    if (mas1[i] % 77 == 0) {
        str1 = str1 + mas1[i] + ", ";
    }
}
str1 = str1.substring(0, str1.length - 2);
console.log("dalijasi iš 77 be liekanos: " + str1);
//------------------------------------------
console.log("3 uzd");
var stringOne = "";
for (let j = 0; j < 100; j++) {
    stringOne = stringOne + "*";
}
for (let i = 0; i < 100; i++) {
    console.log(stringOne);
}
//-----------------------------------------
console.log("4 uzd");
// let element = document.getElementById("title");
// let elementText = element.innerText;
//console.log(elementText);
let webElement = document.getElementById("title");

let HTML = "";
for (let i = 0; i < 10; i++) {
    HTML += "<div>";
    for (let a = 0; a < 10; a++) {
        // if(a == 0 && a == 9){
        //     HTML += "&";
        //     webElement.style.color= "red";
        // }else{
            HTML += "*";
            // webElement.style.color= "red";
        }
        
    }
    HTML += "</div>";

webElement.innerHTML = HTML;

//NEBAIGTAS
//------------------------------------------------
console.log("5a uzd");
// 0 - herbas, 1 - skaicius
let h = 0;
let s = 0;
result = 0;
while(h == 0){
    result = Math.round(Math.random() * 1);
    console.log("Metimas: " + result);
    if(result == 0){
        h++;
    }else{
        s++;
    }
}
console.log("Zaidimas baigtas");
console.log("H: " + h);
console.log("S: " + s);
//------------------------------------------------
console.log("5b uzd");
// 0 - herbas, 1 - skaicius
h = 0;
s = 0;
result = 0;
while(h < 3){
    result = Math.round(Math.random() * 1);
    console.log("Metimas: " + result);
    if(result == 0){
        h++;
    }else{
        s++;
    }
}
console.log("Zaidimas baigtas");
console.log("H: " + h);
console.log("S: " + s);
//-----------------------------------------------
console.log("5c uzd");
// 0 - herbas, 1 - skaicius
h = 0;
s = 0;
result = 0;
herb = 0;
while(h < 3){
    result = Math.round(Math.random() * 1);
    console.log("Metimas: " + result);
    if(result == 0){
        h++;
    }else{
        s++;
        h = 0;
        herb += 3;
    }
}
console.log("Zaidimas baigtas");
console.log("H: " + herb);
console.log("S: " + s);
//-------------------------------------------