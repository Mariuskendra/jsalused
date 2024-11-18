/**
 * CONDITIONAL STATEMENTS
 * - if..else
 * - switch statement
 */

/**
 * IF..ELSE
 */

// Too poest piima, kui on saia, too kaks.
const isThereBread = true;

//pikalt kirjutatud if..else laused
if (isThereBread) {
    //kui if on true, siis käivitame selle koodiploki
    console.log("2 piima.")
} else {
    //kui if oli false, siis käivitame selle koodiploki
    console.log("toon üpest 1 piima.")
}

//ternary operaator, kuidas kirjutada if..else lauseid lühidalt
// conditional ? true : false
console.log(isThereBread ? "toon poest 2 piima" : "toon poest 1 piima")

/**
 * SWITCH STATEMENT
 */
    
let redbullsDrankToday = 2;

switch(redbullsDrankToday) {
    case 1:
        console.log("anna minna!");
        break;
    case 2:
        console.log("on ruumi, aga hakkab otsa saama.");
        break;
    case 3:
        console.log("ja ongi kõik!");
        break;
    default:
        console.log("palju palju mine arsti juurde!");
        break;
}
