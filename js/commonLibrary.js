/**
 * Created by Jim Tomonto on 9/24/17.
 */
/**
 * @name commonLibrary.js
 *
 * Homework assignment for Class #5 - Time a Road Trip
 *
 * Assignment:
 *
 *
 */

var allCityRoutesArray = null;

function printArray(arrayToPrint) {
    if (isArray(arrayToPrint)) {
        arrayToPrint.forEach(logItem);
    }
}

function logItem(item, index) {
    //console.log("key: " + key + " index[" + index + "] value is: '" + item + "'");
    console.log("index[" + index + "] value is: '" + item + "'");
}

function getCityInfoRowsByName(cityName, cityArray) {
    var cityInfo = [];
    if (isArray(cityArray)) {
        for (var i = 0; i < cityArray.length; i++) {
            if (getCity(cityArray[i]) === cityName) {
                cityInfo.push(cityArray[i]);
            }
        }
    }
    return cityInfo;
}

function pickRandomCity(cityArray) {
    if (isArray(cityArray)) {
        return getCity(cityArray[chooseRandomPosition(cityArray)]);
    }
}

function chooseRandomCity(route, array) {
    if (isArray(array)) {
        var foundCityOnRoute = false;
        var cityRow = null;

        while (!foundCityOnRoute) {
            // get random position and return that value
            var pos = chooseRandomPosition(array);
            cityRow = array[pos];
            if(getRoute(cityRow) === route) {
                console.log("Random city is: " + getCity(cityRow));
                foundCityOnRoute = true;
            } else {
                console.log("Skipping and getting another");
            }
        }
        return cityRow;
    }
}
function chooseRandomPosition(array) {
    if(isArray(array)) {
        // get random position
        return getRandomIntInclusive(0, array.length - 1);
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    //The maximum is inclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isArray(array) {
    if (array instanceof Array) {
        return true;
    } else {
        console.log("Unable to choose from NON-Arrays");
        return false;
    }
}

function setAllCityRoutes(array) {
    allCityRoutesArray = array;
}

function getAllCityRoutes() {
    return allCityRoutesArray;
}

function getRouteCities(route) {
    var routeCitiesArray = [];
    for (var j = 0; j < getAllCityRoutes().length; j++) {
        var row = getAllCityRoutes()[j];
        //console.log("Row is: " + row);
        if(getRoute(row) === route) {
            routeCitiesArray.push(row);
        }
    }

    return routeCitiesArray;
}
