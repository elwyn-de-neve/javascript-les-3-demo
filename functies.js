// Functie declaratie
// Het creeren van de functie en dus het uitschrijven van wat de functie moet doen

// Functie met parameters
function functieNaam( parameter1, parameter2 ) {
    return parameter1 * parameter2
}

// Functie zonder parameters
const functieNaamNoParams = () => {
    return 3 * 3
}

// Annonieme functie (functie wordt opgeslagen in variabele)
const functieNaamAnnoniem = function( parameter1, parameter2 ) {
    return parameter1 * parameter2
}

// Arrow functie
const functieNaamArrow = ( parameter1, parameter2 ) => {
    return parameter1 * parameter2
}

// Arrow functie met 1 param en korte schrijfwijze
const functieNaamArrowShort = parameter1 => parameter1 * 3


// Functie aanroepen
// Het gebruiken van een eerder gedeclareerde functie

functieNaam( 2, 5 );
functieNaamNoParams();

// console.log(functieNaamNoParams())

// Argumenten vs parameters
// Parameters worden gebruikt bij het declareren van de functie (reserveren een plek in de functie, die later wordt opgehaald)
// Argumenten worden gebruikt bij het aanroepen van de functie (het invullen van de gereserveerde plek)