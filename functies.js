// Functie declaratie
// Het creeren van de functie en dus het uitschrijven van wat de functie moet doen

// Functie zonder parameters
const functieNaamNoParams = () => {
    return 3 * 3
}

// Functie met parameters
function functieNaam(parameter1, parameter2) {
    return parameter1 * parameter2
}

// Annonieme functie (functie wordt opgeslagen in variabele)
const functieNaamAnnoniem = function (parameter1, parameter2) {
    return parameter1 * parameter2
}

// Arrow functie
const functieNaamArrow = (parameter1, parameter2) => {
    return parameter1 * parameter2
}

// Arrow functie met 1 param en korte schrijfwijze
const functieNaamArrowShort = parameter1 => parameter1 * 3


// Functie aanroepen
// Het gebruiken van een eerder gedeclareerde functie

functieNaam(2, 5);
functieNaamNoParams();
functieNaamAnnoniem(3, 3)

// console.log(functieNaamNoParams())

// Argumenten vs parameters
// Parameters worden gebruikt bij het declareren van de functie (reserveren een plek in de functie, die later wordt opgehaald)
// Argumenten worden gebruikt bij het aanroepen van de functie (het invullen van de gereserveerde plek)

// Part 1
function greet() {
    console.log( "Hello there!" );
}

greet();

// Part 2
function greetPerson(person) {
    console.log( "Hello " + person + "!" );
}

greetPerson("Elwyn" );

// Part 3
function greetByFirstAndLastName( firstName, lastName ) {
    console.log( "Hello " + firstName + " " + lastName + "!" )
}

greetByFirstAndLastName( "Elwyn", "de Neve" );

// Part 4
function multiply( x, y ) {
    console.log( x * y );
}

multiply( 2, 3 )

// Part 5 (Return)
function multiplyWithoutReturnOrLog( x, y ){
    console.log( x * y );
    return( x * y )
}

console.log(multiplyWithoutReturnOrLog( 3,4));

// Part 6 Object
const obj = {
    fistName: "Elwyn",
    lastName: "de Neve"
}

function getKeyAndValue( param ){
    return `Hello ${ param.fistName } ${ param.lastName }`
}

console.log(getKeyAndValue( obj ));

// Part 7 Array
const arr = [ "Elwyn", "de Neve" ]

function getArrayEntry( param ){
    return `Hello ${ param[0] } ${ param[1] }!!`
}

console.log(getArrayEntry( arr ));

