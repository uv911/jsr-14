
$(function(maxNumAnimals) {
    var animalCount = 0;
    var farmAnimals = [];


    var animalSpecies = [
        {   species: 'Chicken',
            colors: ['White'],
            activities: [
                {   activity: 'Standing',
                    maxSpeed: 0
                },
                {   activity: 'Laying',
                    maxSpeed: 0
                }
            ]
        },
        {   species: 'Cow',
            colors: ['White', 'Brown'],
            activities: [
                {   activity: 'Walking',
                    maxSpeed: 3
                },
                {   activity: 'Looking',
                    maxSpeed: 0
                },
                {   activity: 'Standing',
                    maxSpeed: 0
                }
            ]
        },
        {   species: 'Goat',
            colors: ['Brown'],
            activities: [
                {   activity: 'Standing',
                    maxSpeed: 0
                }
            ]
        },
        {   species: 'Goose',
            colors: ['White'],
            activities: [
                {   activity: 'Flying1',
                    maxSpeed: 10
                },
                {   activity: 'Flying2',
                    maxSpeed: 10
                },
                {   activity: 'Swimming1',
                    maxSpeed: 1
                },
                {   activity: 'Swimming2',
                    maxSpeed: 1
                }
            ]
        },
        {   species: 'Horse',
            colors: ['Brown', 'Black'],
            activities: [
                {   activity: 'Galloping',
                    maxSpeed: 20
                },
                {   activity: 'Walking',
                    maxSpeed: 6
                },
                {   activity: 'Standing',
                    maxSpeed: 0
                }
            ]
        },
        {   species: 'Pig',
            colors: ['Pink'],
            activities: [
                {   activity: 'Standing',
                    maxSpeed: 0
                }
            ]
        },
        {   species: 'Rooster',
            colors: ['Brown'],
            activities: [
                {   activity: 'Standing',
                    maxSpeed: 0
                }
            ]
        },
        {   species: 'Sheep',
            colors: ['White'],
            activities: [
                {   activity: 'Running',
                    maxSpeed: 6
                },
                {   activity: 'Sitting',
                    maxSpeed: 0
                },
                {   activity: 'Standing',
                    maxSpeed: 0
                }
            ]
        }];
/*,
        {   species: 'Sheep'},
            colors: [{'Cow'}, {'Pig'}, {'Duck'}];
*/
    // Change 3rd param to currentSpeed and then calc currentActivity -> then can change speed and image will change
    function FarmAnimal(species, color, currentActivity) {

        // Need to increment counter after because need prototype to be ID = 0
        this.id = animalCount++;
        this.species = species;
        this.currentActivity = currentActivity;
        this.color = color;


        this.whatAmI = "I am a " + this.color + ' ' + this.species + " that is " + this.currentActivity + " and I have the ear tag number " + this.id;

        this.getId = function() { return this.id; };
        this.getSpecies = function() { return this.species; };
        this.calcImageName = function() {
            if(this.species === undefined) {
                return 'images/DefaultAnimal.png';
            } else {
                return 'images/' + this.species + this.color + this.currentActivity + '.png';
            }
        };

        this.imageName = this.calcImageName();

        this.identify = function() {
            var msg = new SpeechSynthesisUtterance(this.whatAmI);
            window.speechSynthesis.speak(msg);
        };

        // http://www.animal-sounds.org/farm-animal-sounds.html
        this.speak = function() {
            if(this.species !== undefined) {
                new Audio('sounds/' + this.species + '.wav').play();
            }
        }
        var realName = this.calcImageName();
        //console.log(this.calcImageName());
        //this.imageName = (realName.length === "INVALID") ? "images/DefaultAnimal.png" : realName;



    }

    FarmAnimal.prototype.habitat;

    function RoamingAnimal() {

    }

    function Horse(species, color, currentActivity) {
        FarmAnimal.call(this, species, color, currentActivity);
        this.habitat = 'pasture';
        //console.log("My habitat is " + this.habitat);
    }
    Horse.prototype = new FarmAnimal();

    function Sheep(species, color, currentActivity) {
        FarmAnimal.call(this, species, color, currentActivity);
        this.habitat = 'pasture';
    }

    function Goat(species, color, currentActivity) {
        FarmAnimal.call(this, species, color, currentActivity);
        this.habitat = 'fenced2';
    }


    function CagedAnimal() {

    }

    function Cow(species, color, currentActivity) {
        FarmAnimal.call(this, species, color, currentActivity);
        this.habitat = 'fenced';
    }

    function Pig(species, color, currentActivity) {
        FarmAnimal.call(this, species, color, currentActivity);
        this.habitat = 'fenced2';
    }

    function SwimmingAnimal() {

    }

    function Rooster(species, color, currentActivity) {
        FarmAnimal.call(this, species, color, currentActivity);
        this.habitat = 'coop';
    }

    function Chicken(species, color, currentActivity) {
        FarmAnimal.call(this, species, color, currentActivity);
        this.habitat = 'coop';
    }

    function Goose(species, color, currentActivity) {
        FarmAnimal.call(this, species, color, currentActivity);
        if(this.currentActivity.match(/swimming/i)) {
            this.habitat = 'water';
        } else {
            this.habitat = 'air';
        }
    }

    function Habitat() {

    }

    function Pasture() {

    }

    function Caged() {

    }

    function Water() {

    }

    function FarmAnimalFactory() {
        this.birthAnimal = function(species, color, currentActivity) {
            var animal = null;
            var speciesRowNum = 0;
            if (species === 'Random') {
                speciesRowNum = chooseRandomPosition(animalSpecies)
                species = animalSpecies[speciesRowNum].species;
            } else {
                for (var i = 0; i < animalSpecies.length; i++) {
                    if (animalSpecies[i].species === species) {
                        speciesRowNum = i;
                        break;
                    }
                }

            }

            if (color === 'Random') {
                color = animalSpecies[speciesRowNum].colors[chooseRandomPosition(animalSpecies[speciesRowNum].colors)];
            }

            if (currentActivity === 'Random') {
                currentActivity = animalSpecies[speciesRowNum].activities[chooseRandomPosition(animalSpecies[speciesRowNum].activities)].activity;
            }

            switch(species) {
                case 'Cow':
                    animal = new Cow(species, color, currentActivity);
                    break;
                case 'Horse':
                    animal = new Horse(species, color, currentActivity);
                    break;
                case 'Goat':
                    animal = new Goat(species, color, currentActivity);
                    break;
                case 'Sheep':
                    animal = new Sheep(species, color, currentActivity);
                    break;
                case 'Pig':
                    animal = new Pig(species, color, currentActivity);
                    break;
                case 'Chicken':
                    animal = new Chicken(species, color, currentActivity);
                    break;
                case 'Rooster':
                    animal = new Rooster(species, color, currentActivity);
                    break;
                case 'Goose':
                    animal = new Goose(species, color, currentActivity);
                    break;
                default:
                    animal = null;//new Horse(species, color, currentActivity);
            }

            console.log(animal.whatAmI);
            animal.speak();
            return animal;
        }
    }



    function speakHandler() {
        // The farmAnimals array is 0 based and the animal id's are 1 based
        //farmAnimals[this.id - 1].speak();
        farmAnimals[this.id - 1].identify();
    }

    var factory = new FarmAnimalFactory();

    var i = setInterval(function(){
        var animal;
        if (farmAnimals.length % 3 === 0) {
            animal = factory.birthAnimal('Goose', 'Random', 'Flying1');
        } else {
            animal = factory.birthAnimal('Random', 'Random', 'Random');
        }
        //var animal = factory.birthAnimal('Horse', 'Random', 'Random');
        farmAnimals.push(animal);

        var selector = 'div.' + animal.habitat;
        $(selector).each(function() {
            var img = $('<img id="' + animal.id + '" class="animal ' + animal.species.toLowerCase() + ' ' + animal.currentActivity.toLowerCase() + ' " src="' + animal.imageName + '" />');
            $(this).append(img);
            img.click(speakHandler);
        });

        if(animal.id >= maxNumAnimals) {
            clearInterval(i);
        }
    }, 2000);




    /*
    for (var i = 0; i < maxNumAnimals; i++) {
        var animal = new FarmAnimal( 'Horse', animalSpecies[0].colors[0], animalSpecies[0].activities[0] );
        $('div.fenced').append('<img class="cow animal" src="' + animal.calcImageName() + '" />')
    }

    for (var i = 0; i < maxNumAnimals; i++) {
        var animal = new FarmAnimal( 'Horse', animalSpecies[0].colors[1], animalSpecies[0].activities[2] );
        $('div.pasture').append('<img class="cow animal" src="' + animal.calcImageName() + '" />')
    }
*/
    //console.log(farmAnimals.length);
}(35))