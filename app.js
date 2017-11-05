
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

    function FarmAnimal(species, color, currentActivity) {

        // Need prototypes to be ID = 0
        if(species === undefined) {
            this.id = 0;
        } else {
            // Need to increment counter before because want animals to have ID > 0
            this.id = ++animalCount;
        }

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

        this.imageName = (species === undefined) ? "images/DefaultAnimal.png" : this.calcImageName();

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
    }

    FarmAnimal.prototype.habitat;

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
    Sheep.prototype = new FarmAnimal();

    function Goat(species, color, currentActivity) {
        FarmAnimal.call(this, species, color, currentActivity);
        this.habitat = 'fenced2';
    }
    Goat.prototype = new FarmAnimal();

    function Cow(species, color, currentActivity) {
        FarmAnimal.call(this, species, color, currentActivity);
        this.habitat = 'fenced';
    }
    Cow.prototype = new FarmAnimal();

    function Pig(species, color, currentActivity) {
        FarmAnimal.call(this, species, color, currentActivity);
        this.habitat = 'fenced2';
    }
    Pig.prototype = new FarmAnimal();

    function Rooster(species, color, currentActivity) {
        FarmAnimal.call(this, species, color, currentActivity);
        this.habitat = 'coop';
    }
    Rooster.prototype = new FarmAnimal();

    function Chicken(species, color, currentActivity) {
        FarmAnimal.call(this, species, color, currentActivity);
        this.habitat = 'coop';
    }
    Chicken.prototype = new FarmAnimal();

    function Goose(species, color, currentActivity) {
        FarmAnimal.call(this, species, color, currentActivity);
        if(this.currentActivity.match(/swimming/i)) {
            this.habitat = 'water';
        } else {
            this.habitat = 'air';
        }
    }
    Goose.prototype = new FarmAnimal();

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
        if (farmAnimals.length % 5 === 0) {
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
    }, 2500);

// Pass the max number of animals allowed on the farm
}(30))