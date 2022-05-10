const xMenCharacters = [
    {
        character: "Professor X",
        name: "Charles Francis Xavier",
        abilities: [ "Telepathy", "Induce Mental Illusions", "Mental or Physical Paralysis", "Amnesia" ],
        gender: "male"
    },
    {
        character: "Magneto",
        name: "Erik Magnus",
        abilities: [ "Magnetism", "Shoot Electromagnetic Pulses" ],
        gender: "male"
    },
    {
        character: "Cyclops",
        name: "Scott Summers",
        abilities: [ "Energy Beams" ],
        gender: "male"
    },
    {
        character: "Storm",
        name: "Ororo Munroe",
        abilities: [ "Expert Tactician", "Manipulate Weather" ],
        gender: "female"
    },
    {
        character: "Wolverine",
        name: "Logan",
        abilities: [ "Strength", "Reflexes", "Enhanced Senses", "Tracking Abilities", "Healing Power" ],
        gender: "male"
    },
    {
        character: "Rogue",
        name: "Anna Marie LeBeau",
        abilities: [ "Absorb and Remove Memories", "Physical Strength", "Superpowers of anyone she Touches"],
        gender: "female"
    },
]

// Log de namen van alle mannelijke X-Men:
    // Charles Francis Xavier
    // Erik Magnus
    // Scott Summers
    // Logan

/*for (let i = 0; i < xMenCharacters.length; i++) {
    // console.log( xMenTeam[i].gender )
    if ( xMenCharacters[i].gender === "male" ) {
        console.log( xMenCharacters[i].name );
    }
}*/

// Log characters met 3 of meer abilities
    // Professor X
    // Wolverine
    // Rogue

/*for (let i = 0; i < xMenCharacters.length; i++) {
    if ( xMenCharacters[i].abilities.length >= 3 ) {
        console.log( xMenCharacters[i].character );
    }
}*/

// Log de laatste ability in de array van elke vrouwelijke X-Men
    // Manipulate Weather
    // Superpowers of anyone she Touches


/*for (let i = 0; i < xMenCharacters.length; i++) {
    // console.log( xMenTeam[i].gender )
    if ( xMenCharacters[i].gender === "female" ) {
        console.log( xMenCharacters[i].abilities[ xMenCharacters[i].abilities.length - 1 ] );
    }
}*/


