/**
 * Operaatorid
 *

/**
 * || tähendab OR
 * && tähendab AND
 */

const a = 3;
const b = -2;

// || puhul peab 1 pooltest olema true et statement oleks true
//jätkame kui a on suurem kui 0 või b on suurem kui0
console.log(a > 0 || b > 0); //TRUE

//&& puhul peavad mõlemad pooled true olema et statement oleks true
//kui 1 pooltest on false on kogu statement false
//jätkame kui a on suurem kui 0 ja b on suurem kui 0
console.log(a > 0 && b > 0 ); //FALSE

// ! puhul pööratakse väärtus ümber
// kui enne oli väärtus false, siis kasutades ! operaatorit on vastus nüüd true
const isThisJavascript = true;
console.log("without ! operator: ", isThisJavascript); //true
console.log("with ! operator: ", !isThisJavascript); //false