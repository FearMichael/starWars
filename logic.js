$(document).ready(function () {

$(document).on("click", function(event) {
    if (soundPlayed === 0) {
        $("#starwarsSoundtrack")[0].play();
        soundPlayed++;
    }
});

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
    attack: 10,
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
var soundPlayed = 0;
var defendersDefeated = 0;
var attackButton = $("#attackButton");
var challengerSelected = false;
var defenderSelected = false;
var attackCount = 1;
var challenger;
var defender;
var vaderImage = $("#vaderImage");
var jabbaImage = $("#jabbaImage");
var palpatineImage = $("#palpatineImage");
var lukeImage = $("#lukeImage");
var bb8Image = $("#bb8Image");
var yodaImage = $("#yodaImage");
//Text-area variables
var defenderPlace = $("#defender");
var challengerPlace = $("#challenger");
var challengerName = $("#challengerName");
var challengerHealth = $("#challengerHealth");
var challengerAttack = $("#challengerAttack");
var defenderName = $("#defenderName");
var defenderHealth = $("#defenderHealth");
var defenderAttack = $("#defenderAttack");

//Game start/setup

//instructions to select a good and a bad player, directions change when one or the other is selected

// Attack function

function attack() {
    //Play audio
    $("#lightsaber")[0].play();
    //Damage defender
    defender.hp -= attackCount * challenger.attack;
    defenderName.text(defender.name);
    defenderHealth.text(defender.hp);
    defenderAttack.text(defender.counterAttack);
    //Damage challenger
    challenger.hp -= defender.counterAttack;
    challengerName.text(challenger.name);
    challengerHealth.text(challenger.hp);
    challengerAttack.text(challenger.attack);
    //Win and loss calculations
    if (defender.hp <= 0) {
        $("#defenderDown").show(800);
        attackButton.hide();
        defenderSelected = false;
        defenderName.text("");
        defenderAttack.text("");
        defenderHealth.text(""); 
        defendersDefeated++;
        switch(defender) {
            case vader:
            vaderImage.fadeOut(800);
            break;
            case jabba:
            jabbaImage.fadeOut(800);
            break;
            case palpatine:
            palpatineImage.fadeOut(800);
            break;
        };
    } else if (challenger.hp <= 0) {
        alert("Oh no, you lost! The Empire will Strike Back...")
        switch(challenger) {
            case luke:
            lukeImage.fadeOut(800);
            break;
            case yoda:
            yodaImage.fadeOut(800);
            break;
            case bb8:
            bb8Image.fadeOut(800);
            break;
        };
    };
    attackCount++;
    if (defendersDefeated === 3) {
        alert("The Galaxy is safe once again! Congratulations Warrior");
    }
};

//Display Health / attack when a character is selected

$(".btn.character").on("click", function(event) {
    character = $(this).attr("value");
    if (challengerSelected == false) {
        switch(character) {
            case 'luke':
            challengerName.text(lukeSkywalker.name);
            challengerHealth.text(lukeSkywalker.hp);
            challengerAttack.text(lukeSkywalker.attack);
            challengerSelected = true;
            challenger = lukeSkywalker;
            break;
            case 'bb8':
            challengerName.text(bb8.name);
            challengerHealth.text(bb8.hp);
            challengerAttack.text(bb8.attack);
            challengerSelected = true;
            challenger = bb8;
            break;
            case 'yoda':
            challengerName.text(yoda.name);
            challengerHealth.text(yoda.hp);
            challengerAttack.text(yoda.attack);
            challengerSelected = true;
            challenger = yoda;
            break;
            };
    };
    if (defenderSelected == false) {
        switch(character) {
            case 'vader':
            defenderName.text(vader.name);
            defenderHealth.text(vader.hp);
            defenderAttack.text(vader.counterAttack);
            defenderSelected = true;
            defender = vader;
            break;
            case 'jabba':
            defenderName.text(jabba.name);
            defenderHealth.text(jabba.hp);
            defenderAttack.text(jabba.counterAttack);
            defenderSelected = true;
            defender = jabba;
            break;
            case 'palpatine':
            defenderName.text(palpatine.name);
            defenderHealth.text(palpatine.hp);
            defenderAttack.text(palpatine.counterAttack);
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

// Animations/Alerts
$("#defenderDownButton").on("click", function(event) {
    $("#defenderDown").hide(300);
    attackButton.show(300);
});

//attack button attacks with good character and auto counter attacks with bad character

//animation when player is eliminated

});