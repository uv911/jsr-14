
$(function(numAnimals) {
    var animalCount = 0;
    var farmAnimals = [];


    var animalSpecies = [
        {   species: 'Horse',
            colors: ['Brown', 'Black'],
            activities: [
                {   activity: 'Running',
                    maxSpeed: 23
                },
                {   activity: 'Walking',
                    maxSpeed: 6
                },
                {   activity: 'Standing',
                    maxSpeed: 0
                }
            ],
            maxSpeed: 23
        }];
/*,
        {   species: 'Sheep'},
            colors: [{'Cow'}, {'Pig'}, {'Duck'}];
*/
    // Change 3rd param to currentSpeed and then calc currentActivity -> then can change speed and image will change
    function FarmAnimal(species, color, currentActivity) {

        this.id = ++animalCount;
        this.species = species;
        this.currentActivity = currentActivity;
        this.color = color;

        this.whatAmI = "I am a " + this.color + ' ' + this.species + " that is " + this.currentActivity + " and I have the ear tag number " + this.id;

        this.getId = function() { return this.id; };
        this.getSpecies = function() { return this.species; };
        this.getImageName = function() { return 'images/' + this.species + this.color + this.currentActivity + '.png'; };

        this.identify = function() {
            var msg = new SpeechSynthesisUtterance(this.whatAmI);
            window.speechSynthesis.speak(msg);
        };

        this.speak = function() {
            console.log(this.speakingSound);
        }

        console.log(this.whatAmI);
        //this.speak();
    }

    FarmAnimal.prototype.habitat;
    FarmAnimal.prototype.speakingSound;


    function RoamingAnimal() {

    }

    function Horse() {

        this.speakingSound = 'nay';
    }
    Horse.prototype = new FarmAnimal();

    function Sheep() {

    }

    function CagedAnimal() {

    }

    function Cow() {

    }

    function Pig() {

    }

    function SwimmingAnimal() {

    }

    function Duck() {

    }

    function Habitat() {

    }

    function Pasture() {

    }

    function Caged() {

    }

    function Water() {

    }

    function speakHandler() {
        // The farmAnimals array is 0 based and the animal id's are 1 based
        //console.log(farmAnimals[this.id - 1]);
        farmAnimals[this.id - 1].identify();
    }

    var i = setInterval(function(){
        // do your thing
        /*
        var animal = new FarmAnimal( 'Horse', animalSpecies[0].colors[0], animalSpecies[0].activities[0].activity );
        $('div.fenced').append('<img id="' + counter + '" class="horse animal" src="' + animal.getImageName() + '" />')
        counter++;

        var animal = new FarmAnimal( 'Horse', animalSpecies[0].colors[1], animalSpecies[0].activities[2].activity );
        $('div.pasture').append('<img id="' + counter + '" class="cow animal" src="' + animal.getImageName() + '" />')
        counter++;
        */
        var animal = new FarmAnimal( 'Horse', animalSpecies[0].colors[1], animalSpecies[0].activities[2].activity );
        farmAnimals.push(animal);

        $('div.pasture').each(function() {
            var img = $('<img id="' + animal.id + '" class="cow animal" src="' + animal.getImageName() + '" />');
            $(this).append(img);
            img.click(speakHandler);
        });

        if(animal.id >= numAnimals) {
            clearInterval(i);
        }
    }, 300);




    /*
    for (var i = 0; i < numAnimals; i++) {
        var animal = new FarmAnimal( 'Horse', animalSpecies[0].colors[0], animalSpecies[0].activities[0] );
        $('div.fenced').append('<img class="cow animal" src="' + animal.getImageName() + '" />')
    }

    for (var i = 0; i < numAnimals; i++) {
        var animal = new FarmAnimal( 'Horse', animalSpecies[0].colors[1], animalSpecies[0].activities[2] );
        $('div.pasture').append('<img class="cow animal" src="' + animal.getImageName() + '" />')
    }
*/
    console.log(farmAnimals.length);
}(5))