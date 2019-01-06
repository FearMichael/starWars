$(document).ready(function () {

//JSON for each character
var lukeSkywalker = {
    name: "Luke Skywalker",
    attack: 6,
    hp: 150,
};

var bb8 = {
    name: "BB8",
    attack: 3,
    hp: 120,
};

var yoda = {
    name: "Yoda",
    attack: 12,
    hp: 200,
};

var vader = {
    name: "Darth Vader",
    counterAttack: 8,
    hp: 150,
};

var jabba = {
    name: "Jabba The Hutt",
    counterAttack: 4,
    hp: 100,
};

var palpatine = {
    name: "Emperor Palpatine",
    counterAttack: 6,
    hp: 120
};

// Variable declarations

var attackButton = $("#attackButton");
var defenderPlace = $("#defender");
var challengerPlace = $("#challenger");
var challengerSelected = false;
var defenderSelected = false;
var attackCount = 1;
var challenger;
var defender;
//Game start/setup

//instructions to select a good and a bad player, directions change when one or the other is selected

// Attack function

function attack() {
    defender.hp -= attackCount * challenger.attack;
    defenderPlace.text("<p>" + defender.name + "<p>" + defender.counterAttack + "<p>" + defender.hp);
    console.log(defender.hp);
    console.log(defender.name);
    challenger.hp -= defender.counterAttack;
    challengerPlace.text("<p>" + challenger.name + "<p>" + challenger.attack + "<p>" + challenger.hp);

    console.log(challenger.name);
    console.log(challenger.hp);
    if (defender.hp <= 0) {
        alert("Defender has been defeated! Choose your next defender...");
        defenderSelected = false;
        defenderPlace.empty();
    } else if (challenger.hp <= 0) {
        alert("Oh no, you lost! The Empire will Strike Back...")
    };
    attackCount++;
};

//Display Health / attack when a character is selected

$(".btn.character").on("click", function(event) {
    character = $(this).attr("value");
    if (challengerSelected == false) {
        switch(character) {
            case 'luke':
            challengerPlace.append("<p>" + lukeSkywalker.name + "<p>" + lukeSkywalker.attack + "<p>" + lukeSkywalker.hp);
            challengerSelected = true;
            challenger = lukeSkywalker;
            break;
            case 'bb8':
            challengerPlace.append("<p>" + bb8.name + "<p>" + bb8.attack + "<p>" + bb8.hp);
            challengerSelected = true;
            challenger = bb8;
            break;
            case 'yoda':
            challengerPlace.append("<p>" + yoda.name + "<p>" + yoda.attack + "<p>" + yoda.hp);
            challengerSelected = true;
            challenger = yoda;
            break;
            };
    };
    if (defenderSelected == false) {
        switch(character) {
            case 'vader':
            defenderPlace.append("<p>" + vader.name + "<p>" + vader.counterAttack + "<p>" + vader.hp);
            defenderSelected = true;
            defender = vader;
            break;
            case 'jabba':
            defenderPlace.append("<p>" + jabba.name + "<p>" + jabba.counterAttack + "<p>" + jabba.hp);
            defenderSelected = true;
            defender = jabba;
            break;
            case 'palpatine':
            defenderPlace.append("<p>" + palpatine.name + "<p>" + palpatine.counterAttack + "<p>" + palpatine.hp);
            defenderSelected = true;
            defender = palpatine;
            break;
        };
    };
        
});

attackButton.on("click", function(event) {
    if (defenderSelected == true && challengerSelected == true) {
        attack();
    }
});

//attack button attacks with good character and auto counter attacks with bad character

//animation when player is eliminated



});
