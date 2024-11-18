/**
 * Equality comparision - võrdlemine
 * == vs ===
 * == v
 * võrdleb omavahel väärtusi
 * === võrdleb omavahel väärtusi ning andmetüüpe
 */


console.log(5 == "5"); //true
console.log(5 === "5"); //false
console.log(1 === true); //false
console.log(Object.is (5, "5"));

/**
 * Type coersion vs conversion
 * käsitsi sundiminde versus automaatne muutmine
 */

console.log(5 + "5"); // JS runtime automaatselt konverdib number tüübi stringiks
console.log(5 + Number("5")); // käsitsi sunnime string 5 olema number 5

/**
 * typeof operator
 * - tagastab meile antud väärtuse admetüübi
 */

console.log(typeof "Marius") //string