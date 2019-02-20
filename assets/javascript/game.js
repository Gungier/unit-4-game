
var rndmNumber = "";
var generateNumber = [];
var crystNumber = "";
var generateCrysNumber = [];
var result = 0;

//game trackers
var wins = 0;
var losses = 0;

//function for creating random number b/ween 19-120
$(#result).html()


//function to create crystals
for(var i = 0; i < 4; i++){
    
    var random = Math.floor(Math.random() * 12 + 1);
    console.log(random);
    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": random
    });

    $(".crystals").append(crystal);
}

//function for creating random number b/ween 19-120






